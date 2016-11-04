# Themes

`formidable-charts` has a set of beautiful preset themes ready to go. We default to the `simple` theme, but if you want to try out the whole set, here's how:

```js
import { LineChart, Themes } from "formidable-charts";

class MyChart extends Component {
  render() {
    return (
      <LineChart theme={Themes.dark} />
    )
  }
}
```

Right now we have 4 themes you can choose from:

`bright` - A bright, fun theme.

![bright](http://i.imgur.com/UqNQyls.png)

`simple` - A simple, yet elegant theme.

![simple](http://i.imgur.com/LcoDg8J.png)

`dark` - Uh oh who turned the lights out. A dark theme for your charts.

![dark](http://i.imgur.com/5I11B9q.png)

`danceparty` - Use this one carefully. You might have too much fun.

![danceparty](http://i.imgur.com/8nwFBGu.png)

Keep your eyes peeled, there are more themes on the way!
