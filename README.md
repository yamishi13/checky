# Checky

Simple way to save state on checkboxes

# License

Released under MIT License. Refer to LICENSE file for details.

# Usage

1.- git clone checky into your webpage directory
``` git
git clone https://github.com/yamishi13/checky.git
```
or download a release for full tested code

2.- Add checky to your html
Development
``` html
<script type="text/javascript" src="checky/checky.js"></script>
```
Production
``` html
<script type="text/javascript" src="checky/checky-min.js"></script>
```

3.- Instantiate and checkyfy checkboxes 
``` javascript
ck = new Checky();
ck.checkyfy("checkbox tag id");
```
or checkyfy a checkbox with an anchor
``` javascript
ck = new Checky();
ck.checkyfy("checkbox tag id", "anchor tag id");
```

# Continuos Integration

[![Build Status](https://travis-ci.org/yamishi13/checky.png?branch=master)](https://travis-ci.org/yamishi13/checky)
