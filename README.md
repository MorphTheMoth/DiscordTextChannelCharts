# DiscordTextChannelCharts
charts of the top written word in a discord text channel 

to use this you need to have:
 - [a discord bot](https://discord.com/developers/applications)
 - [nodejs, to run the bot that fetches the text channel](https://nodejs.org/en/download/)
 - [python, to run the GUI](https://www.python.org/downloads/)


# how to use

1) insert your bot token in the bot.js file (31st line)
2) [copy the id](https://discordia.me/en/developer-mode) of the channel you want to plot a graph
3) insert the channel id in bot.js (9th line)
4) start the bot.js file using `node "path/to/bot.js"` in cmd
5) wait until it says that it has finished
-- now you should have a *channelName*.json file
6) add the channel name in the chart.py file (6th line)
7) open the chart.py file, or write `py "path/to/chart.py"` in cmd


# example

![image](https://user-images.githubusercontent.com/36893247/123089283-08b7ac00-d427-11eb-8b44-fa07753cff8a.png)
