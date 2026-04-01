export default function sitemap() {
  const baseUrl = 'https://www.nextfuture-it.com';
  
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/products',
    '/offers',
    '/faq',
    '/service',

  ];

  const languages = ['en', 'ar'];
  
  const urls = [];
  
  languages.forEach(lang => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`,
          },
        },
      });
    });
  });

  return urls;
}
