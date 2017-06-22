var gulp = require('gulp');
var exec = require('child_process').exec;
var mkdirs = require('mkdirs');

var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon')

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

gulp.task('create-data-folder', function() {
  mkdirs('./mongodb/data');
});

//https://stackoverflow.com/questions/28665395/using-gulp-to-manage-opening-and-closing-mongodb

gulp.task('start-mongo', runCommand('mongod --dbpath ./mongodb/data/'));
gulp.task('stop-mongo', runCommand('mongo --eval "use admin; db.shutdownServer();"'));
gulp.task('create-db', runCommand('mongo tauw --eval "db.getCollectionNames()"'));
gulp.task('import-data', runCommand('mongoimport --db tauw --collection sensors --drop --file ./sensorseed.json'));
gulp.task('import-data2', runCommand('mongoimport --db tauw --collection settings --drop --file ./settingsseed.json'));
gulp.task('drop-collection', runCommand('mongo tauw --eval "db.sensors.drop()"'));

gulp.task('setup-db',['create-data-folder','start-mongo','create-db','import-data', 'import-data2']);

gulp.task('sass', function() {
    return gulp.src('public/stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('watch', function() {
    gulp.watch('public/stylesheets/*.scss', ['sass']);
});

gulp.task('start', function () {
  nodemon({
    script: 'bin/www'
  , ext: 'js html ejs'
  , env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('default', ['sass','start-mongo', 'watch','start']);
