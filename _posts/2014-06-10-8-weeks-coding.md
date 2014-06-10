---
layout: post
tags: [web, teaching]
title: 8 weeks, 60 students and 1 web application
---

To continue my series of posts on teaching web programming, I would
like to share on the project students had to realize for my
[web programming course](http://defeo.lu/aws/).

In past years, I used to ask the students to develop a web application
of their likes, setting some minimum requirements to pass the
course. I picked this from beginner courses I had been tutoring for in
[École Polytechnique](http://moodle.polytechnique.fr/course/view.php?id=5)
and in [Paris VII](http://didiode.fr/wp/), while I was a PhD student.

Although this formula was very successful in École Polytechnique, and
reasonably good in Paris VII, it was very disappointing in my own
course. I got tired of having to grade, over and over, the usual forum
application, mostly grabbed off the Internet and poorly put
together. Some of the best projects sure were able to blow my mind,
like a fully functional battleship game, or an almost functional
[multiplayer Scrabble](https://github.com/Dav-Davys/Scrabble-Chat/).
But the large majority of it was just dull and boring, when it wasn't
cheating.

I think the reasons for this failure sum up to: student level highly
inhomogenous, course requirements too high for most students, course
duration too short. Mostly the opposite of what we had in
Polytechnique and Paris VII. I was not ready to give up on the
requirements, so I had to find a way to force the students to keep up
with the course and do more work.

The directed project, to be developed during the tutoring sessions (3
class hours per week, plus a lot of homework for most students),
turned out to work very good. It was rather ambitious: write a
multi-user almost-real-time
[Connect-four](http://en.wikipedia.org/wiki/Connect_Four)
application. I have to admit it even flirted with the impossible: the
last part required to push play events from the server to the clients;
something very natural to code in Node.js, but very unnatural in
Silex.

The progression kept the students interested all along. They strove to
complete all the requirements, going well beyond what they would have
achieved on a project of their own. Almost everyone got to write some
AJAX interaction: something I had not even dreamed of in past years. I
was amazed to see several students complete all the requirements,
delivering a
[fully functional Connect-four game](https://github.com/NadiaIkhlef/puissance4).

According to the polls, 80% of the students found that the course
required more work than other masters' courses, but they got
relatively high grades, and 75% of them where happy about it. But
didn't this make cheating worse? Quite the contrary, as I will develop
in the next post.

One thing some students complained about was the lack of feedback on
the quality of the work they were providing. I collected and graded
their work twice (once mid-course, once at the end), was several weeks
late giving grades, and could hardly have done more, given that I was
alone grading 60 students. Also, just two numbers hardly give much
information on what's good and what's bad in the code.

Auto-graders could provide one way of improving feedback. In the
future, I think it would be interesting to experiment with them,
although I am afraid they could hinder the students' creativity by not
inspiring them to freely explore. Another interesting way in which
auto-graders could complement the directed project would be to isolate
and teach fundamental concepts by short, self-contained exercises
focusing on specific skills (e.g.: navigating the DOM, building a HTTP
response by hand, etc.).

Given that the course already has a good deal of video material, and
that I am planning more of it for next year, the use of auto-graders
would make it more and more akin to a MOOC. Who knows...
