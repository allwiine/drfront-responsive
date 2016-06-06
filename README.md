[![Build Status](https://travis-ci.org/allwiine/drfront-responsive.svg?branch=master)](https://travis-ci.org/allwiine/drfront-responsive)
[![Code Climate](https://codeclimate.com/github/allwiine/drfront-responsive/badges/gpa.svg)](https://codeclimate.com/github/allwiine/drfront-responsive)
[![Issue Count](https://codeclimate.com/github/allwiine/drfront-responsive/badges/issue_count.svg)](https://codeclimate.com/github/allwiine/drfront-responsive)
[![devDependency Status](https://david-dm.org/allwiine/drfront-responsive/dev-status.svg)](https://david-dm.org/allwiine/drfront-responsive#info=devDependencies)
[![Dependency Status](https://david-dm.org/allwiine/drfront-responsive.svg)](https://david-dm.org/allwiine/drfront-responsive)    
      
[![NPM](https://nodei.co/npm/drfront-responsive.png?compact=true)](https://nodei.co/npm/drfront-responsive/)  
     

# drfront-responsive    
     
This little SASS-project fixes the none-responsive stylesheets that comes with Dr.Front.    
The css has no dependencies, but should only be deployed on top of the already generated code from Dr.Front.   
      
      
## Installation   
```
npm install drfront-responsive --save-dev
```    
     
## Usage    
Include `node_modules/drfront-responsive/src/sass/` as a path to your sass-build. 
       
Then you should create your own settings file for the drfront-responsive settings.   
This can be copied from `node_modules/drfront-responsive/src/sass/settings/_settings.scss`.   
If you dont provide your own settings, drfront-responsive will use the default settings.   
These can be seen in `node_modules/drfront-responsive/src/sass/_global.scss.    

Then import the settings file you created and the drfrontresponsive.scss file into your main sass file.    
```
@import "<the-name-you-have-the-config-file"; 
@import "drfront-responsive"
```

You now have a mixin called drfrontresponsive() ready for use in your stylesheet.   
This can be included just simply as:
```
@include drfront-responsive()
```     
    
If the default settings are correct for your dr.front setup, then there are two prebuilt css file in `node_modules/dist/css/` , one minified and one not.   
These can be included just like any other stylesheet, after the drfront css.   
     

## Develop    
Clone or fork the repo from github:    
https://github.com/allwiine/drfront-responsive#fork-destination-box     
     
```
git clone git@github.com:allwiine/drfront-responsive.git
```    
      
The projects builds by the use of Gulp.   
To set up the project for further development, simply run:   
    
```
npm install 
```
    
The you can build the project by running:     
```
gulp
```
     
Or you can build and have gulp watch the source files for changes, and auto-trigger a new build.   
Your do this by running:    
```
gulp dev
```
     
All sourcefiles are located in the `src/` folder.   
The gulpfile and tasks can be found in the `gulp/` folder.    
     
## CI   
This project uses Travis CI  


