wp.domReady( () => {
	wp.blocks.unregisterBlockStyle(
		'core/button',
		[ 'default', 'primary', 'secondary', 'fill' ]
	);

	wp.blocks.registerBlockStyle(
		'core/button',
		[
			{
				name: 'default',
				label: 'Default',
				isDefault: true,
			},
			{
				name: 'link',
				label: 'Link',
			}
		]
	);
} );