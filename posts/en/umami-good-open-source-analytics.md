---
title: 'Umami: good open source analytics'
subtitle: 'analytics alternatives to Google Analytics'
date: '2020-10-23'
readingTime: 3
cover:
  image: '/assets/blogs/good-umami.jpg'
  source: 'https://unsplash.com/@lukechesser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  name: 'Luke Chesser'
---

## Table of Contents

- [What is Google Analytics](#what-is-google-analytics)
- [Why should you use Umami](#why-you-should-use-umami)
- [Conclusion](#conclusion)

## <a name='what-is-google-analytics'>What is Google Analytics</a>

For those of you who don't know what Google Analytics (GA) is, quoted from [MonsterInsight](https://www.monsterinsights.com/docs/what-is-google-analytics/) _GA is a free tracking and statistical software that provides You provide important insights into how visitors find your site, what they do when they get there, and other important information about the health of your business: such as eCommerce and lead conversions._

The point is roughly that we can get an overview of traffic visitors from the website that we manage through an analytical system like this GA.

## <a name='why-you-should-use-umami'>Why should you use Umami</a>

Umami is an analytic system like GA, the way it works can be said to be the same as GA, and it's equally free, the difference is that Umami is open source developed by an active community and contributors, while GA is managed and developed by Google.

Umami is built on the Nodejs architecture and is assisted by Nextjs which makes Umami fast with a large codebase, we can also contribute directly to it. Another interesting thing is that we can self-host Umami at a provider that supports Nodejs running on the system, and we can freely customize Umami according to our needs and there are still other features that you can find on the official website at [umami.is](https://umami.is/?ref=kawari.space), or you can check the repository at [Github](https://github.com/mikecao/umami?ref=kawari.space).

The initial installation may not be easy, especially for those who don't understand the structure of the Nodejs application. I myself got stuck several times on a local server and an error on the production server when I tried hosting on Heroku, and finally it worked.

## <a name='conclusion'>Conclusion</a>

If we need a fast analytics system that doesn't need a lot of confusing configurations, maybe Google Analytics is the answer. Or if you want an alternative analytical system that is no less cool than Google Analytics, I recommend you to use Umami.