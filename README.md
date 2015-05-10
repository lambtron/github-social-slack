# GitHub Social Slack

> GitHub's social feed to Slack channel.

Taking GitHub's newsfeed:

![](http://i.imgur.com/iKiuge2.png)

..and posting it in a Slack channel:

![](http://i.imgur.com/4i8f7kw.png)

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Setup

1. Deploy to Heroku (with button or manually).

2. Get Slack channel URL at https://<YOURSUBDOMAIN>.slack.com/services/new/incoming-webhook

3. Get [GitHub token](https://github.com/settings/tokens).

4. Set the Slack URL as `SLACK_POST_URL`, the GitHub token as the `GITHUB_TOKEN`, and the GitHub username as `GITHUB_USER` in the Config Vars section of Heroku:

    ![](http://i.imgur.com/ALjgRkw.png)

5. Set your Heroku Scheduler to run `make` every hour.

    ![](http://i.imgur.com/6gOZtuM.png)


## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

