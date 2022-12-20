const { chromium } = require("playwright");

;(async () => {
	const browser = await chromium.launch()
	const page = await browser.newPage()
	await page.goto("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?response_type=id_token&scope=openid%20profile&client_id=5e3ce6c0-2b1f-4285-8d4b-75ee78787346&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&state=eyJpZCI6IjVjYTI3NGEyLTYyMjUtNDAzMC04MTQ5LTE4NTNkNzNlMTIwZiIsInRzIjoxNjcxNDk0MzUyLCJtZXRob2QiOiJyZWRpcmVjdEludGVyYWN0aW9uIn0%3D&nonce=ddbfb852-067a-48c3-9202-925217fe8548&client_info=1&x-client-SKU=MSAL.JS&x-client-Ver=1.3.4&client-request-id=3799ccd6-6bc7-4d9e-80fc-02700c57e7a7&response_mode=fragment")
	// Espera a que se cargue completamente la página
	await page.waitForLoadState('networkidle') 
	
	// Logeando
	await page.fill('input[name="loginfmt"]', 'miguel.castillo@ibit.pe');
	// await page.locator('button:text("Next")').click()
	await page.click('#idSIButton9')
	await page.locator('input[name="passwd"')

	await page.screenshot({ path: "teams.png" })
	await browser.close()
	console.log("Terminado")
})()
