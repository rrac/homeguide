import React, { Component } from 'react';

class TranslateComp extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<div id="google_translate_element" />
				<script type="text/javascript">
					function googleTranslateElementInit(){' '}
					{
						new google.translate.TranslateElement(
							{
								pageLanguage: 'en',
								includedLanguages: 'fr,nl',
								layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
							},
							'google_translate_element'
						)
					}
				</script>
				<script
					type="text/javascript"
					src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
				/>
			</div>
		);
	}
}

export default TranslateComp;