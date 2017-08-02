const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const tutorials = [
  {
    id: 1,
    title: "Backyard",
    description: "Travis Scott - Days Before the Rodeo",
    iframe: "<iframe width='100%' height='600' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163746355&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe>",
    thumbnail: "https://myblabber.com/be-master/uploads/category_image/1--.jpg"
  },
  {
    id: 2,
    title: "Points On The Board (Prod. @Matics_Music & @KillBighead)",
    description: "Yung Pinch - #4EVERFRIDAY",
    thumbnail: "https://i1.sndcdn.com/artworks-000227672455-d4fpmp-t500x500.jpg",
    iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327329330&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
  },
  {
    id: 3,
    title: "Money Power Respect",
    description: "Travis Scott - Money Power Respect",
    thumbnail: "http://streetssalute.com/wp-content/uploads/2016/08/Travis-Scott-Money-Power-Respect-500x500.jpg",
    iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322459275&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
  },
  {
    id: 4,
    title: "Drugs You Should Try It",
    description: "Travis Scott - Days Before the Rodeo",
    thumbnail: "https://i1.sndcdn.com/artworks-000088468281-q999dc-t200x200.jpg",
    iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163746368&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
  },
  {
                 id: 5,
                 title: "MOLLY (prod. bighead & ronny j)",
                 description: "LIL PUMP- Molly",
                 thumbnail: "https://images.genius.com/373611db5b00ea79c131b384a2778261.500x500x1.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330243250&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 6,
                 title: "Underdogs (Prod. @Gnealz)",
                 description: "Yung Pinch - #4EVERFRIDAY",
                 thumbnail: "https://i1.sndcdn.com/artworks-000228729338-8dbebv-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328346304&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 7,
                 title: "Believe feat. Quavo & Lil Yachty",
                 description: "A-Trak",
                 thumbnail: "https://i1.sndcdn.com/artworks-000234419046-xxwc52-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334050064&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 8,
                 title: "Nav World Mixtape (beatsbynav)",
                 description: "Nav - Mixtape",
                 thumbnail: "https://cdn.spinrilla.com/albums/68173/large/d958724a1c6934f05e50.jpg?1480969860",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318340016&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 9,
                 title: "Do You Love Me - Feat. DJ Stevie J",
                 description: "Migos",
                 thumbnail: "https://i.ytimg.com/vi/EfjrFfj4vMc/maxresdefault.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329575561&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=,false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 10,
                 title: " Say It Ain't So (Prod. @Matics_Music & @Gnealz)",
                 description: "Yung Pinch - 4EVER",
                 thumbnail: "https://i1.sndcdn.com/artworks-000207798889-c2ou7r-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/298545126&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 11,
                 title: "Party On The Coast (Prod. @Matics_Music)",
                 description: "Yung Pinch - 4EVERFRIDAY",
                 thumbnail: "https://i1.sndcdn.com/artworks-000231404404-6lpo22-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330969365&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 12,
                 title: "Can't Get Enough (prod. Zaytoven)",
                 description: "Quavo - Cant Get Enough",
                 thumbnail: "http://www.hustlehearted.com/wp-content/uploads/2017/06/cant-get-enough-prod-by-zaytoven-750-750-1497551121.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327217563&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 13,
                 title: "A man",
                 description: "Travis Scott - A man",
                 thumbnail: "https://images.genius.com/008ed6ad2d8bc75385032b395da4f598.500x500x1.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322833885&amp;auto_play=true &amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 
                 },
                 {
                 id: 14,
                 title: "Gospel (Prod. RONNY J)",
                 description: "Rich Chigga x Keith Ape x XXXTentacion",
                 thumbnail: "https://i1.sndcdn.com/artworks-000222155918-w0qrwj-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322157678&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 14,
                 title: "BOWSER FT XXXTENTACION (Prod by Purp Dogg)",
                 description: "Ski Mask The Slump God - Members Only Playlist",
                 thumbnail: "https://i.ytimg.com/vi/vfJlk_8FlTE/maxresdefault.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319657833&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 15,
                 title: "Butterfly Effect",
                 description: "Travis Scott - Single",
                 thumbnail: "https://i1.sndcdn.com/artworks-000222759833-opxbe7-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322834362&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 16,
                 title: "Green & Purple f/Playboi Carti",
                 description: "Travis Scott - Single",
                 thumbnail: "https://i1.sndcdn.com/artworks-000222759967-qgmutg-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/322834576&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 17,
                 title: "RaRa FT LILUZIVERT",
                 description: "Travis Scott",
                 thumbnail: "https://i1.sndcdn.com/artworks-000180380992-q2o2rl-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281126358&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 18,
                 title: "When I Was Yung (prod. @Matics_Music)",
                 description: "Yung Pinch - 714EVER",
                 thumbnail: "https://images.genius.com/452b1471652b051ea8277457783336e7.500x500x1.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274633273&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 19,
                 title: "Party On The Coast (Prod. @Matics_Music)",
                 description: "Yung Pinch - 4EVERFRIDAY",
                 thumbnail: "https://i1.sndcdn.com/artworks-000231404404-6lpo22-t500x500.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330969365&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 20,
                 title: "The Hooch",
                 description: "Travis Scott - Single",
                 thumbnail: "https://images.genius.com/7e62a269cb245b815856cd6eae986a40.1000x1000x1.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/282414095&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 21,
                 title: "Madeintokyo Uber Everywhere",
                 description: "Travis Scott - Single",
                 thumbnail: "https://images.genius.com/32cfc932b3ee88310864d6eb74aa0e17.750x751x1.jpg",
                 iframe: '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250680341&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'
                 },
                 {
                 id: 22,
                 title: "Myself",
                 description: "NAV - NAV",
                 thumbnail: "https://i.scdn.co/image/9aa69eb2f0d984c480dca53db498e94d0736730b",
                 iframe: '<iframe src="//play.anghami.com/widget/song/22534685?ee7e5d7c39b3b94df8f4671c22cbfad6" scrolling="no" frameborder="0" width="400" height="600"></iframe>'
                 },
                 {
                 id: 23,
                 title: "Perfect Timing (Intro)",
                 description: "NAV & Metro Boomin - Perfect Timing",
                 thumbnail: "https://images.genius.com/8aa810dbedc4bd7937acee22f2f33b15.1000x1000x1.png",
                 iframe: '<iframe src="//play.anghami.com/widget/song/24440564?ee7e5d7c39b3b94df8f4671c22cbfad6" scrolling="no" frameborder="0" width="400" height="600"></iframe>'
                 
                 },
                {
                 id: 24,
                 title: "Hit",
                 description: "NAV & Metro Boomin - Perfect Timing",
                 thumbnail: "https://images.genius.com/8aa810dbedc4bd7937acee22f2f33b15.1000x1000x1.png",
                 iframe: '<iframe src="//play.anghami.com/widget/song/24538078?ee7e5d7c39b3b94df8f4671c22cbfad6" scrolling="no" frameborder="0" width="400" height="600"></iframe>'
                 
                 },
                 {
                 id: 25,
                 title: "Up",
                 description: "NAV - NAV",
                 thumbnail: "https://i.scdn.co/image/9aa69eb2f0d984c480dca53db498e94d0736730b",
                 iframe: '<iframe src="//play.anghami.com/widget/song/21348061?ee7e5d7c39b3b94df8f4671c22cbfad6" scrolling="no" frameborder="0" width="400" height="600"></iframe>'
                 },
                 {
                 id: 26,
                 title: "Some Way (ft. The Weeknd)",
                 description: "NAV - NAV",
                 thumbnail: "https://i.scdn.co/image/9aa69eb2f0d984c480dca53db498e94d0736730b",
                 iframe: '<iframe src="//play.anghami.com/widget/song/21348065?ee7e5d7c39b3b94df8f4671c22cbfad6" scrolling="no" frameborder="0" width="400" height="600"></iframe>'
                 },
                 {
                 id: 27,
                 title: "Sleep",
                 description: "NAV - NAV",
                 thumbnail: "https://i.scdn.co/image/9aa69eb2f0d984c480dca53db498e94d0736730b",
                 iframe: '<iframe src="//www.anghami.com/widget/song/22534692?62f28d23c6a869f9700c13f4be781f9c" scrolling="no" frameborder="0" width="375" height="600"></iframe>'
                 }
                 
        
                 
                 
    
    
]


app.get('/', function(req, res) {
  console.log("GET from server");
  res.send(tutorials);
});


if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
