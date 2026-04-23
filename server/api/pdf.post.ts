import { defineEventHandler, setHeader } from 'h3'
import { chromium } from 'playwright'

export default defineEventHandler(async (event) => {
  let browser
  try {
    browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/preview', { waitUntil: 'networkidle' })
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' }
    })
    setHeader(event, 'Content-Type', 'application/pdf')
    setHeader(event, 'Content-Disposition', 'attachment; filename="resume.pdf"')
    return pdf
  } catch (error) {
    console.error('PDF error:', error)
    setHeader(event, 'Content-Type', 'application/json')
    return { error: 'Failed to generate PDF' }
  } finally {
    if (browser) await browser.close()
  }
})