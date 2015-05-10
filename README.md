# GitHub Social Feed

> GitHub's social feed to Slack channel.

Taking GitHub's newsfeed:

![](http://i.imgur.com/iKiuge2.png)

..and posting it in a Slack channel:

![](http://i.imgur.com/4i8f7kw.png)

## Setup

1. Deploy this with the button below (or clone this repo and deploy manually).

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

2. Get Slack channel URL at https://<YOURSUBDOMAIN>.slack.com/services/new/incoming-webhook

3. Get [GitHub token](https://github.com/settings/tokens).

4. Set the Slack URL as `SLACK_POST_URL`, the GitHub token as the `GITHUB_TOKEN`, and the GitHub username as `GITHUB_USER` in the Config Vars section of Heroku:

![](http://i.imgur.com/ALjgRkw.png)

5. Set your Heroku Scheduler to run `make` every hour.

![](http://i.imgur.com/6gOZtuM.png)

6. Have fun!

