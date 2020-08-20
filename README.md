# Halo Collectibles

![Deploy to Github Pages](https://github.com/mickelsonmichael/HaloCollectibles/workflows/Deploy%20to%20Github%20Pages/badge.svg)

This application was created in an attempt to organize the 700 achievements available in the game Halo: Master Chief Collection. The collection is a series of 6 games packed into one large game; this makes getting all the achievements an organizational nightmare.

You can enter in your Xbox gamertag on the site and it will make a request to an Azure Function, which will then pass the request on to one of two Xbox APIs. This allows the application to be "serverless" and free to host with low enough traffic. Once the request is completed, you can see which achievements you have completed and sort them by game.

There is also an ongoing effort to add all the collectibles available in the games that have associated achievements. This is currently a work in progress.

-----

The application was used as a learning platform to experiment with React and Azure Functions, and to additionally teach a friend how to utilize Git and Github and even write a React application. Most of the functionality of this site can be more or less performed by using <https://trueachievements.com>, so the main goal here is learning and a clean interface.
