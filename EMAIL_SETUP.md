# Email Setup Instructions

## Setting up Resend for Contact Form

1. **Create a Resend Account**

   - Go to [https://resend.com/](https://resend.com/)
   - Sign up for a free account
   - Verify your email address

2. **Get Your API Key**

   - Log into your Resend dashboard
   - Go to API Keys section
   - Create a new API key
   - Copy the API key

3. **Set Environment Variable**
   Create a `.env.local` file in your project root and add:

   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Domain Configuration (Optional)**
   - By default, emails are sent from `onboarding@resend.dev` (free tier)
   - For production with your own domain:
     1. Add and verify your domain in Resend dashboard (requires DNS records)
     2. Update the `from` field in `/src/app/api/send-email/route.ts`
     3. Example: `from: 'Contact Form <noreply@yourdomain.com>'`
   - **Note**: The free tier with `onboarding@resend.dev` works fine for testing and personal portfolios

## How it Works

- The contact form sends data to `/api/send-email` endpoint
- The API validates the form data
- Resend sends a formatted email to `vedanshsharma712@gmail.com`
- User gets success/error feedback

## Email Template

The email includes:

- Contact person's name and email
- Subject line
- Message content
- Formatted HTML template
- Reply-to address set to the contact person's email

## Testing

1. Fill out the contact form on your portfolio
2. Check your email at `vedanshsharma712@gmail.com`
3. Verify the email formatting and content

## Troubleshooting

- Make sure `.env.local` is in your project root
- Restart your Next.js development server after adding environment variables
- Check Resend dashboard for delivery status
- Check browser console for any JavaScript errors
