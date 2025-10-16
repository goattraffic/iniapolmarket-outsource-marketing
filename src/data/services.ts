export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    short: "Boost your organic visibility and drive qualified traffic",
    price: "$1,200/month",
    features: [
      "Technical SEO audit and optimization",
      "Keyword research and strategy",
      "On-page and off-page optimization",
      "Monthly performance reports"
    ],
    contentHtml: `
      <p>Search Engine Optimization is the foundation of sustainable online growth. Our comprehensive SEO services help your business rank higher in search results, attract qualified traffic, and increase conversions.</p>
      
      <h3>What We Do</h3>
      <p>Our SEO approach combines technical excellence with strategic content optimization. We start with a thorough audit of your website's current performance, identifying technical issues, content gaps, and opportunities for improvement.</p>
      
      <p>We conduct extensive keyword research to understand what your potential customers are searching for. This research informs our content strategy and ensures we're targeting terms that will drive meaningful business results, not just traffic.</p>
      
      <h3>Technical Excellence</h3>
      <p>Technical SEO forms the backbone of our service. We optimize site speed, mobile responsiveness, crawlability, and indexation. Our team ensures your website meets all modern SEO best practices and search engine guidelines.</p>
      
      <h3>Content Optimization</h3>
      <p>We optimize existing content and create new, high-quality content that resonates with your audience and search engines. Every piece is crafted to provide value while incorporating strategic keywords naturally.</p>
      
      <h3>Link Building</h3>
      <p>Our white-hat link building strategies help establish your website as an authority in your industry. We focus on acquiring high-quality, relevant backlinks that genuinely enhance your site's credibility.</p>
      
      <h3>Results You Can Measure</h3>
      <p>We provide detailed monthly reports showing improvements in rankings, organic traffic, and conversions. You'll see exactly how our efforts translate into business growth and ROI.</p>
    `
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    short: "Engage your audience with strategic, high-quality content",
    price: "$1,500/month",
    features: [
      "Content strategy development",
      "Blog posts and articles (4-8 per month)",
      "Content calendar management",
      "Performance analytics"
    ],
    contentHtml: `
      <p>Content marketing is about telling your brand's story in a way that educates, entertains, and converts. Our content marketing services help you build authority, trust, and meaningful connections with your audience.</p>
      
      <h3>Strategic Approach</h3>
      <p>We begin by understanding your business goals, target audience, and competitive landscape. This research forms the foundation of a content strategy designed to attract and nurture your ideal customers.</p>
      
      <p>Our content calendar ensures consistent publishing while maintaining flexibility for timely, relevant topics. We plan content themes that align with your sales cycle, seasonal trends, and industry events.</p>
      
      <h3>Quality Content Creation</h3>
      <p>Our team of experienced writers creates content that resonates with your audience. From in-depth guides and thought leadership articles to practical how-to posts, every piece is crafted to provide genuine value.</p>
      
      <p>We optimize all content for search engines without sacrificing readability or value. Each article is researched, written, edited, and formatted to professional standards.</p>
      
      <h3>Content Distribution</h3>
      <p>Creating great content is only half the battle. We ensure your content reaches the right audience through strategic distribution across owned, earned, and paid channels.</p>
      
      <h3>Performance Measurement</h3>
      <p>We track key metrics including page views, engagement rates, time on page, and conversion rates. This data informs our ongoing strategy and helps us continuously improve results.</p>
      
      <h3>Continuous Improvement</h3>
      <p>Content marketing is an ongoing process. We regularly analyze performance, identify opportunities, and refine our approach to ensure your content continues to drive business results.</p>
    `
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Build and engage your community across social platforms",
    price: "$1,000/month",
    features: [
      "Profile optimization",
      "Daily posting and engagement",
      "Community management",
      "Monthly analytics reports"
    ],
    contentHtml: `
      <p>Social media is where conversations happen and relationships are built. Our social media management services help you establish a strong presence, engage authentically with your audience, and drive meaningful business results.</p>
      
      <h3>Platform Strategy</h3>
      <p>Not all social platforms are created equal, and not all are right for your business. We identify which platforms will deliver the best ROI based on your target audience, industry, and resources.</p>
      
      <p>We develop platform-specific strategies that leverage each channel's unique features and audience behaviors. What works on LinkedIn differs from Instagram, and we tailor our approach accordingly.</p>
      
      <h3>Content Creation</h3>
      <p>Our team creates engaging social content that stops the scroll. From eye-catching graphics and compelling copy to video content and stories, we produce content designed for social success.</p>
      
      <h3>Community Management</h3>
      <p>Social media is a two-way conversation. We actively monitor your profiles, respond to comments and messages, and engage with your community in an authentic voice that represents your brand.</p>
      
      <p>Our community management extends beyond your own profiles. We identify and participate in relevant industry conversations, helping position your brand as a thought leader.</p>
      
      <h3>Growth Strategies</h3>
      <p>We implement proven strategies to grow your following organically. This includes hashtag research, influencer engagement, content partnerships, and more.</p>
      
      <h3>Advertising Integration</h3>
      <p>When appropriate, we recommend and manage paid social campaigns to amplify your reach and accelerate results. We handle everything from creative development to targeting and optimization.</p>
    `
  },
  {
    slug: "ppc-advertising",
    title: "PPC Advertising",
    short: "Drive immediate results with targeted paid advertising",
    price: "$800/month + ad spend",
    features: [
      "Campaign strategy and setup",
      "Ad copy and creative development",
      "Ongoing optimization",
      "Detailed performance reporting"
    ],
    contentHtml: `
      <p>Pay-per-click advertising delivers immediate visibility and traffic. Our PPC management services help you reach your target audience at the exact moment they're searching for your products or services.</p>
      
      <h3>Campaign Strategy</h3>
      <p>We develop comprehensive PPC strategies aligned with your business goals. Whether you're focused on lead generation, e-commerce sales, or brand awareness, we structure campaigns for maximum impact.</p>
      
      <p>Our keyword research goes beyond search volume. We analyze intent, competition, and cost to identify opportunities that will deliver the best ROI for your budget.</p>
      
      <h3>Ad Creation</h3>
      <p>We craft compelling ad copy that speaks directly to your target audience's needs and desires. Our ads are designed to achieve high click-through rates while attracting qualified prospects.</p>
      
      <p>For display and social campaigns, we create eye-catching visuals that stop users in their tracks and drive action. All creative is tested and optimized for performance.</p>
      
      <h3>Landing Page Optimization</h3>
      <p>We ensure your landing pages are optimized for conversion. From messaging and design to page speed and mobile responsiveness, we address all factors that impact conversion rates.</p>
      
      <h3>Campaign Management</h3>
      <p>PPC requires constant attention and optimization. We monitor campaigns daily, adjusting bids, refining targeting, and testing new approaches to maximize your return on ad spend.</p>
      
      <h3>Comprehensive Reporting</h3>
      <p>Our detailed reports show exactly where your money is going and what results you're getting. We provide transparent, actionable insights that inform both PPC and broader marketing decisions.</p>
    `
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    short: "Nurture leads and drive sales with strategic email campaigns",
    price: "$900/month",
    features: [
      "Email strategy development",
      "Campaign design and copywriting",
      "List segmentation and management",
      "A/B testing and optimization"
    ],
    contentHtml: `
      <p>Email marketing remains one of the highest-ROI marketing channels. Our email marketing services help you nurture relationships, drive conversions, and build customer loyalty through strategic, personalized email campaigns.</p>
      
      <h3>Strategic Foundation</h3>
      <p>We develop comprehensive email strategies that align with your customer journey. From welcome series to re-engagement campaigns, we create email programs that guide subscribers toward conversion.</p>
      
      <p>Our segmentation strategies ensure the right message reaches the right person at the right time. We leverage behavioral data, demographics, and engagement history to create highly targeted campaigns.</p>
      
      <h3>Design and Development</h3>
      <p>Our emails are designed to be visually appealing, on-brand, and mobile-responsive. We ensure every email looks great across all devices and email clients.</p>
      
      <p>We balance visual appeal with technical best practices, optimizing for deliverability while creating emails that engage and convert.</p>
      
      <h3>Compelling Copy</h3>
      <p>Our copywriters craft email content that resonates with your audience. From attention-grabbing subject lines to persuasive body copy and clear calls-to-action, every element is optimized for results.</p>
      
      <h3>Automation</h3>
      <p>We build sophisticated automation workflows that nurture leads and customers automatically. These programs work 24/7 to move subscribers through your funnel and drive revenue.</p>
      
      <h3>Testing and Optimization</h3>
      <p>We continuously test subject lines, send times, content, and design elements to improve performance. Our data-driven approach ensures your email program constantly evolves and improves.</p>
      
      <h3>Deliverability Management</h3>
      <p>We monitor and optimize deliverability to ensure your emails reach the inbox. This includes list hygiene, sender reputation management, and compliance with email marketing regulations.</p>
    `
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    short: "Make data-driven decisions with comprehensive analytics",
    price: "$700/month",
    features: [
      "Custom dashboard setup",
      "Monthly performance reports",
      "Conversion tracking implementation",
      "Actionable insights and recommendations"
    ],
    contentHtml: `
      <p>Data without insights is just noise. Our analytics and reporting services transform your marketing data into actionable intelligence that drives better decisions and improved results.</p>
      
      <h3>Setup and Configuration</h3>
      <p>We implement comprehensive tracking across all your marketing channels. This includes setting up Google Analytics, conversion tracking, event tracking, and custom reporting dashboards.</p>
      
      <p>Our technical expertise ensures accurate data collection. We configure tracking to capture the metrics that matter most to your business, from basic pageviews to complex multi-touch attribution.</p>
      
      <h3>Custom Dashboards</h3>
      <p>We create custom dashboards that provide at-a-glance visibility into your marketing performance. These dashboards are designed for your specific needs, showing the metrics that matter most to your business.</p>
      
      <h3>Regular Reporting</h3>
      <p>Our monthly reports go beyond raw numbers. We provide context, analysis, and recommendations based on your data. You'll understand not just what happened, but why it happened and what to do about it.</p>
      
      <p>We present data in clear, visual formats that make complex information easy to understand. Our reports are designed for decision-makers who need actionable insights, not data dumps.</p>
      
      <h3>Performance Analysis</h3>
      <p>We dig deep into your data to uncover trends, opportunities, and issues. Our analysis helps you understand which marketing activities are driving results and which need adjustment.</p>
      
      <h3>Conversion Optimization</h3>
      <p>We identify conversion bottlenecks and opportunities for improvement. By analyzing user behavior and conversion paths, we provide specific recommendations to increase conversion rates.</p>
      
      <h3>Competitive Insights</h3>
      <p>We benchmark your performance against industry standards and competitors, helping you understand where you stand and where opportunities exist.</p>
    `
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    short: "Build a powerful brand that resonates with your audience",
    price: "$2,500 (one-time)",
    features: [
      "Brand audit and analysis",
      "Positioning and messaging development",
      "Visual identity guidelines",
      "Brand style guide"
    ],
    contentHtml: `
      <p>Your brand is more than a logo—it's the perception people have of your business. Our brand strategy services help you create a clear, compelling brand that differentiates you from competitors and resonates with your target audience.</p>
      
      <h3>Brand Discovery</h3>
      <p>We start by understanding your business, industry, competitors, and customers. Through workshops, interviews, and research, we uncover what makes your business unique and valuable.</p>
      
      <p>Our brand audit assesses your current brand perception, identifying strengths to leverage and gaps to address. We examine all customer touchpoints to ensure consistency and effectiveness.</p>
      
      <h3>Strategic Positioning</h3>
      <p>We develop a positioning strategy that clearly defines your place in the market. This includes identifying your target audience, unique value proposition, and key differentiators.</p>
      
      <p>Your positioning becomes the foundation for all marketing and communication decisions, ensuring consistency and clarity across all channels.</p>
      
      <h3>Brand Messaging</h3>
      <p>We create a comprehensive messaging framework including your brand story, key messages, and tone of voice. This framework ensures everyone communicating on behalf of your brand speaks with one consistent voice.</p>
      
      <h3>Visual Identity</h3>
      <p>While we focus on strategy, we work with design partners to ensure your visual identity aligns with your brand strategy. This includes guidelines for logo usage, color palette, typography, and imagery.</p>
      
      <h3>Implementation Guidelines</h3>
      <p>We provide detailed guidelines for implementing your brand across all channels. This includes templates, examples, and best practices to maintain brand consistency.</p>
      
      <h3>Internal Alignment</h3>
      <p>A brand only works when everyone understands and embraces it. We help train your team on your brand strategy, ensuring internal alignment and consistent external expression.</p>
    `
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    short: "Scale your marketing efforts with intelligent automation",
    price: "$1,300/month",
    features: [
      "Platform setup and integration",
      "Workflow design and implementation",
      "Lead scoring and nurturing",
      "Performance monitoring"
    ],
    contentHtml: `
      <p>Marketing automation allows you to deliver personalized experiences at scale. Our automation services help you nurture leads more effectively, improve conversion rates, and make better use of your marketing resources.</p>
      
      <h3>Platform Selection and Setup</h3>
      <p>We help you choose the right marketing automation platform for your needs and budget. Whether it's HubSpot, Marketo, or another solution, we ensure you have the right tools for your goals.</p>
      
      <p>Our team handles the technical setup, integration with your CRM and other systems, and configuration of all necessary tracking and reporting.</p>
      
      <h3>Workflow Design</h3>
      <p>We design sophisticated automation workflows that guide prospects through your funnel. These workflows deliver the right content at the right time based on behavior, demographics, and engagement.</p>
      
      <p>From simple welcome series to complex nurture programs, we build automations that work 24/7 to convert and retain customers.</p>
      
      <h3>Lead Scoring</h3>
      <p>We implement lead scoring systems that help your sales team focus on the most qualified prospects. Our scoring models consider both explicit data (demographics, company info) and implicit data (behavior, engagement).</p>
      
      <h3>Personalization</h3>
      <p>Marketing automation enables true personalization at scale. We leverage automation capabilities to deliver personalized content, recommendations, and experiences based on individual prospect behavior and preferences.</p>
      
      <h3>Integration Strategy</h3>
      <p>We ensure your marketing automation platform works seamlessly with your other systems. This includes CRM integration, email service provider connections, and any other tools in your marketing stack.</p>
      
      <h3>Ongoing Optimization</h3>
      <p>We continuously monitor and optimize your automation workflows. By analyzing performance data, we identify opportunities to improve conversion rates, engagement, and overall effectiveness.</p>
    `
  },
  {
    slug: "marketing-consulting",
    title: "Marketing Consulting",
    short: "Strategic guidance to accelerate your marketing success",
    price: "$200/hour",
    features: [
      "Strategic planning sessions",
      "Marketing audit and analysis",
      "Campaign review and optimization",
      "Team training and mentoring"
    ],
    contentHtml: `
      <p>Sometimes you need expert guidance more than hands-on execution. Our marketing consulting services provide strategic direction, unbiased advice, and actionable recommendations to improve your marketing effectiveness.</p>
      
      <h3>Strategic Planning</h3>
      <p>We work with your leadership team to develop comprehensive marketing strategies aligned with business goals. Our planning sessions help you set clear objectives, identify opportunities, and create roadmaps for success.</p>
      
      <p>We bring outside perspective and industry expertise to challenge assumptions, identify blind spots, and uncover opportunities you might have missed.</p>
      
      <h3>Marketing Audits</h3>
      <p>Our comprehensive marketing audits assess the effectiveness of your current marketing efforts. We examine strategy, execution, technology, and team capabilities to identify strengths and areas for improvement.</p>
      
      <p>You'll receive a detailed report with specific, actionable recommendations prioritized by potential impact and ease of implementation.</p>
      
      <h3>Campaign Optimization</h3>
      <p>We review existing campaigns and initiatives, identifying opportunities to improve performance. Our fresh perspective often uncovers quick wins that can immediately improve results.</p>
      
      <h3>Technology Selection</h3>
      <p>The marketing technology landscape is overwhelming. We help you evaluate and select tools that fit your needs and budget, avoiding costly mistakes and ensuring you get maximum value from your investment.</p>
      
      <h3>Team Development</h3>
      <p>We provide training and mentoring to help your marketing team develop new skills and capabilities. This includes workshops on specific topics, ongoing coaching, and strategic guidance.</p>
      
      <h3>Fractional CMO Services</h3>
      <p>For businesses that need senior marketing leadership but aren't ready for a full-time CMO, we offer fractional CMO services. You get strategic leadership and accountability without the cost of a full-time executive.</p>
    `
  }
];
