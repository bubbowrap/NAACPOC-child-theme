<?php
/**
 * Index template.
 *
 * @package Neve
 */

/**
 * Filters the container classes.
 *
 * @param string $classes Container classes.
 *
 * @since 1.0.0
 */
$container_class = apply_filters( 'neve_container_class_filter', 'container', 'blog-archive' );

get_header();

if ( have_posts() ) {

	// Load posts loop.
	while ( have_posts() ) {
		the_post();
		print_r('hey');
		get_template_part( 'template-parts/content/content', get_theme_mod( 'display_excerpt_or_full_post', 'excerpt' ) );
	}


} else {
	print_r('hey');

	// If no content, include the "No posts found" template.
	get_template_part( 'template-parts/content/content-none' );

}

get_footer();
?>