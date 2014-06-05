---
layout: post
tags: [web, teaching]
title: 8 weeks and 60 students with Silex
---

From February to May, I have taught my usual eight weeks
[web programming course](http://defeo.lu/aws/) at Université de
Versailles. The course, called *Applications Web et Sécurité* (Web
Applications and Security) is aimed at first year masters' students
with a computer science major. This is the third time I have taught
this course, and for the third time I have messed up with most of the
syllabus in search of the magic formula. I haven't found it yet, but I
think I got a bit closer.

This year's course was different from the previous ones in many
ways:

- Class material was written in French.
- Tutorials were structured so to construct a full web application
  from the ground up. The design was mostly given in the syllabus. All
  students had to implement the same application, individually or in
  pairs. I would give marks to the final product, which would account
  for one third of the course grade.
- Students had the choice to develop the application in
  [Silex](http://silex.sensiolabs.org/), or
  [Node.js](http://nodejs.org/).
- All development was done in the cloud, using the online IDE
  [Cloud9](https://c9.io/).

I am going to share my experience in a series of blog posts, hoping to
spark some thoughts/reactions/new ideas among my colleagues teaching
similar subjects. I will start by discussing the technologies I chose.

The first year I gave this course, I taught standard PHP+MySQL over a
WAMP, LAMP or MAMP stack; a common choice for this kind of course,
also inherited from my previous experiences. The course was a big
success.

Unfortunately, I hate PHP. The next year, I switched to native Node.js
(no [Express](http://expressjs.com/)), with
[Mustache](http://mustache.github.io/) and SQLite/MySQL. Along the
way, I wrote a
[micro-framework](https://github.com/defeo/was_framework/) to guide
the students in their development. The course was a disaster. Almost
half of the students dropped the course midway. Of those who stayed,
most could not grasp the basic concepts behind Node.js. I ended up
receiving dozens of version of the classic chat room on web sockets
app: I had not taught web sockets, but chat rooms were basically the
only examples written in Node.js one could find on the Internet at the
time.

Why was it so hard? The answer is: "basics". Most of the students could
not grasp the concept of callback, let alone event-driven design!
Also, Node.js was not as popular as it is now: most students were
expecting a PHP course (two thirds of the students already know some
PHP), also in consideration of their employment
perspectives. Fortunately, the usual handful of very good students was
there to cheer me up.

So this year I had to go back to more familiar grounds, but I didn't
want to loose the work done with Node, and still wanted to keep some
of the clean separation of concerns achieved by it. I first thought of
[Symfony](http://symfony.com/): a very elegant PHP framework, open
source, developed in France, and enjoying high demand from the
industry. However, Symfony is a mastodon, with too much magic
happening under the covers. By reading more about Symfony, I
discovered [Silex](http://silex.sensiolabs.org/), a PHP
micro-framework developed by the same company as Symfony, open source,
remarkably similar to Node.

The match was perfect, I can even say Silex reconciled me with
PHP. All the concepts I wanted to teach exist almost identically in
Silex and Node (with Express, this time): HTTP, routers, views,
template languages ([Twig](http://twig.sensiolabs.org/) was a natural
choice), DBALs, AJAX, REST APIs, Server push, security, ...  I could
lecture on the theoretical principles giving examples both in PHP and
Node, while the tutorials would have to be specialized for each
language. This required a little more work on the tutorials, but
nothing very serious (especially when compared with the huge amount of
work the rest of the course gave me). I made very clear from the
beginning that Node.js is for the good students, and that the
*official* framework for the course is Silex. This had the perverse
effect of pushing even some of the best students towards Silex (only 4
of 60 students chose Node), but I am confident that those ones will go
back and have a look at Node anyway.

The cleanliness and lightness of the micro-frameworks made it possible
to focus on fundamental low level details, and most importantly did
not impose a specific pattern, such as MVC. Lecturing with two
languages helped the students visualize the separation between coding
patterns and actual technology.

I was afraid that students with a background in PHP would be reluctant
to change their coding habits and learn how to use a modern framework
and a template language. However this turned out to be a minor
problem: it was enough to clearly state once or twice that they had to
forget everything they knew about PHP. Most of the students, beginners
and not, understood the added value of those modern tools on their
employability, and happily followed the dense syllabus and adhered to
its principles.

To conclude, I am really happy with the two technologies I chose and
with the style of lecturing this implied. What's most important, the
students where happy too. At this stage, it does not seem implausible
that I may add a third framework to the course someday (Python with
[Flask](http://flask.pocoo.org/) comes to the mind).

