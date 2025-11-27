
import { Event, Ministry, StaffMember } from '../types';

// CONFIGURATION
// Replace this with your actual WordPress site URL
const WP_BASE_URL = 'https://demo.wp-api.org/wp-json/wp/v2';

/**
 * Generic fetch wrapper for WordPress API
 */
async function fetchFromWP(endpoint: string, params: Record<string, string> = {}) {
  const url = new URL(`${WP_BASE_URL}${endpoint}`);
  
  // Add query parameters (e.g., ?_embed to get images)
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
  try {
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`WP API Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching from WordPress:', error);
    return [];
  }
}

/**
 * UTILS: Data Mappers
 * Transforms WordPress messy JSON into our clean App Interfaces
 */

const mapWPEventToAppEvent = (wpItem: any): Event => {
  // Extract featured image if available (requires ?_embed param)
  const imageUrl = wpItem._embedded?.['wp:featuredmedia']?.[0]?.source_url 
    || 'https://picsum.photos/800/400?random=1'; // Fallback

  // safely access ACF fields if they exist, or fallback to standard content
  const acf = wpItem.acf || {};

  return {
    id: wpItem.id.toString(),
    title: wpItem.title.rendered,
    // Use ACF fields for specific data, or fallback to date string
    date: acf.event_date || new Date(wpItem.date).toLocaleDateString(),
    time: acf.event_time || 'Check details',
    location: acf.event_location || 'Templo Principal',
    // Strip HTML tags from content for the description preview
    description: wpItem.excerpt?.rendered.replace(/<[^>]+>/g, '') || '',
    imageUrl: imageUrl,
    category: acf.category || '' // 'Service' | 'Community' etc.
  };
};

const mapWPPostToMinistry = (wpItem: any): Ministry => {
  return {
    id: wpItem.id.toString(),
    title: wpItem.title.rendered,
    description: wpItem.excerpt?.rendered.replace(/<[^>]+>/g, '') || '',
    details: wpItem.content?.rendered, // Keep HTML for full details page
    // Map a category ID or ACF field to an icon name
    iconName: wpItem.acf?.icon_name || 'Users' 
  };
};

/**
 * EXPORTED FUNCTIONS
 */

// 1. Fetch Events
// Assumes you have a Custom Post Type called 'events' in WordPress
export const fetchWPEvents = async (): Promise<Event[]> => {
  // '_embed' is crucial to get the featured image in the response
  const data = await fetchFromWP('/events', { 
    _embed: 'true', 
    per_page: '10',
    order: 'asc'
  });
  
  return data.map(mapWPEventToAppEvent);
};

// 2. Fetch Ministries
// Assumes you have a Custom Post Type called 'ministries'
export const fetchWPMinistries = async (): Promise<Ministry[]> => {
  const data = await fetchFromWP('/ministries', { _embed: 'true' });
  return data.map(mapWPPostToMinistry);
};

// 3. Fetch Blog/News Posts
// Uses the standard WordPress 'posts' endpoint
export const fetchWPPosts = async () => {
  return await fetchFromWP('/posts', { _embed: 'true', per_page: '5' });
};

// 4. Fetch Single Page Content
// Useful for About page, Give page content, etc.
export const fetchWPPage = async (slug: string) => {
  const data = await fetchFromWP('/pages', { slug, _embed: 'true' });
  return data.length > 0 ? data[0] : null;
};


// Yes, using WordPress as a Headless CMS is a very popular and powerful choice. It allows church staff to edit content in a familiar interface while your React/React Native app consumes that data via the REST API.
// I have created a services/wordpress.ts file. This service handles fetching data and, crucially, maps the WordPress specific JSON structure (which nests titles and content) into your application's clean interfaces (Event, Ministry, etc.).
// I assumed you might use Advanced Custom Fields (ACF) in WordPress for specific fields like "Event Date" or "Location", as standard WordPress posts don't have these by default.
