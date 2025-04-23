<script>
	/** @type {import('./$types').PageData} */
	// export let data;

	import Clipboard from 'clipboard';
	import { onMount } from 'svelte';

	onMount(() => {
		let clipboard = new Clipboard('#js-clipboard-btn');
	});

	const fontStack = `"Roboto Slab", 'Nimbus Mono PS', 'Courier New', monospace;`;
	const nameStyle = `
		color:black;
		font-weight: bold;
		font-size: 24px;
		font-family: ${fontStack},
		border-style: none;
	`;
	const titleStyle = `
		color:black;
		font-weight: normal;
		font-size: 16px;
		font-family: ${fontStack},
		border-style: none;
	`;
	const phoneStyle = `
		color:black;
		font-weight: bold;
		font-size: 24px;
		font-family: ${fontStack},
		border-style: none;
		padding-top: 1em;
	`;
	const urlStyle = `
		color:#BF272D;
		font-weight: normal;
		font-size: 16px;
		font-family: ${fontStack},
		border-style: none;
	`;
	const tableStyle = `borderCollapse: collapse;`;
	const tdStyle = `
		border-style: none;
		border-width: 0;
		line-height: 1.25;
		`;
</script>

<div class="max-w-[640px] mx-auto">
	<h1 class="text-brown-800 mt-16 text-xl font-bold">Create Your Email Signature</h1>
	<p class="mt-4">
		Enter your personal information below, then click{' '}
		<i>Copy Signature</i>.
	</p>
	<div class="p-4 mt-8 bg-white border">
		<div id="signature" class="border-none">
			<table border="0" cellPadding="0" cellSpacing="0" width="100%" style={tableStyle}>
				<tr>
					<td border="0" cellPadding="0" cellSpacing="0" style={tdStyle}>
						<table border="0" cellPadding="0" cellSpacing="0" width="100%" style={tableStyle}>
							<tbody>
								<tr>
									<td
										border="0"
										cellPadding="0"
										cellSpacing="0"
										style="{tdStyle} padding-bottom:16px;"
									>
										<img
											src="https://biteredheads.com/email_teaser@2x.png"
											alt="Bite Red Heads logo"
											width="260"
											height="43"
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</table>
			<table border="0" cellPadding="0" cellSpacing="0" width="100%" style={tableStyle}>
				<tr>
					<td
						border="0"
						width="264"
						cellPadding="0"
						cellSpacing="0"
						style="{tdStyle} padding-bottom: 16px; border-style: none; border-width:0; border-color:transparent;"
					>
						<img
							src="https://biteredheads.com/email_logo@2x.png"
							alt="Lytos Tech logo"
							width="264"
							height="138"
						/>
					</td>
					<td border="0" cellPadding="0" cellSpacing="0" style={tdStyle + ' padding-left:16px;'}>
						<div style={nameStyle} contenteditable="true">First Last</div>
						<div style={titleStyle} contenteditable="true">Job Title</div>
						<div style={phoneStyle} contenteditable="true">M: 123.456.7890</div>
						<div style={urlStyle}>
							<a style="color: #BF272D; text-decoration:none;" href="https://www.biteredheads.com"
								>BiteRedHeads.com</a
							>
						</div>
					</td>
				</tr>
			</table>
			<table border="0" cellPadding="0" cellSpacing="0" width="100%" style={tableStyle}>
				<tr>
					<td border="0" cellPadding="0" cellSpacing="0" style={tdStyle}>
						<table border="0" cellPadding="0" cellSpacing="0" width="100%" style={tableStyle}>
							<tbody>
								<tr>
									<td border="0" cellPadding="0" cellSpacing="0" style="{tdStyle} padding-top:8px;">
										<img
											src="https://biteredheads.com/email_address@2x.png"
											alt="Bite Red Heads logo"
											width="600"
											height="20"
										/>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</table>
		</div>
	</div>
	<div class="mt-8">
		<div
			id="js-clipboard-btn"
			class="hover:bg-green-800 inline-block px-4 py-2 text-white bg-green-700 rounded cursor-pointer"
			data-clipboard-target="#signature"
		>
			Copy Signature
		</div>
	</div>
</div>
