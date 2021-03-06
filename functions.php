<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! function_exists( 'neve_child_load_css' ) ):
	/**
	 * Load CSS file.
	 */
	function neve_child_load_css() {
		wp_enqueue_style( 'neve-child-style', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array( 'neve-style' ), NEVE_VERSION );
	}
endif;
add_action( 'wp_enqueue_scripts', 'neve_child_load_css', 20 );


function be_gutenberg_components() {

	wp_enqueue_script(
		'be-editor-js', 
		get_stylesheet_directory_uri() . '/assets/js/editor.js', 
		array( 'wp-blocks', 'wp-dom' ), 
		filemtime( get_stylesheet_directory() . '/assets/js/editor.js' ),
		true
	);

	wp_enqueue_style(
		'be-editor-css',
		get_stylesheet_directory_uri() . '/style.css',
		null,
		filemtime( get_stylesheet_directory() . '/style.css' )
	);
}

add_action( 'enqueue_block_editor_assets', 'be_gutenberg_components' );