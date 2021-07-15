wp.domReady( () => {
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

	wp.blocks.registerBlockStyle(
		'core/quote',
		[
			{
				name: 'important',
				label: 'Important',
			},
			{
				name: 'important--secondary',
				label: 'Important Secondary',
			}
		]
	);
	wp.blocks.unregisterBlockStyle('core/quote', 'large');
} );
