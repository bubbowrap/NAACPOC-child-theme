wp.domReady( () => {
	wp.blocks.registerBlockStyle(
		'core/heading',
		[
			{
				name: 'jumbo',
				label: 'Jumbo',
				isDefault: false,
			},
			{
				name: 'alternate',
				label: 'Alternate font',
				isDefault: false,
			}
		]
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
			},
			{
				name: 'link--light',
				label: 'Link White',
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
