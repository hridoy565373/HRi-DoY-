module.exports.config = {
  name: "bot2",
  version: "0.0.2", 
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "talk with bot",
  category: "user",
  usages: "",
    cooldowns: 5,
}; 
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["I Love You" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , ", জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗", "হা বলো😒,কি করতে পারি😐😑?" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","মে হলে হৃদয় বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার হৃদয় জানু এর সাথে ব্যাস্ত আসি😋" , "আই লাভ ইউ" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 I am single🙂" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , ", -ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "BOSS জিহাদ কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি HRIDOY BOSS এর সাথে ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 ওই টা  😑🥺" , "amr Jan lagbe,Tumi ki single aso?", "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻"]; 
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "I love u") || (event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "Love you")) {
     return api.sendMessage("Hmm... বস হৃদয়ও তোমাকে ভালোবাসে😇😻 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "hop")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 হৃদয় বস আমারে কথা বলতে বলছে🤭", threadID);
   };

   if ((event.body.toLowerCase() == "eva") || (event.body.toLowerCase() == "eva")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস হৃদয় এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "eva") || (event.body.toLowerCase() == "ইভা")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস জিহাদ এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
    if ((event.body.toLowerCase() == "হৃদয় আই লাভ ইউ") || (event.body.toLowerCase() == "হৃদয় জান") || (event.body.toLowerCase() == "জিহাদ লুচ্চা") || (event.body.toLowerCase() == "হৃদয় বেবি") || (event.body.toLowerCase() == "hridoy i love you") || (event.body.toLowerCase() == "হৃদয় উম্মা")) {
     return api.sendMessage("এগুলা বলিস না মিম ভাবি শুলনে খবর আছে তোর..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "আজ কেউ নাই বলে") || (event.body.toLowerCase() == "aj keu nay bole")) {
     return api.sendMessage("️ 👉আহা গো সোনা গো আমার খুব কষ্ট হচ্ছে তাই না 🥺😁", threadID);
   };

   if ((event.body.toLowerCase() == "xhipa") || (event.body.toLowerCase() == "chipa")) {
     return api.sendMessage("️ 👉চিপাই যাস না চিপাই গেলে চাপা খেয়ে মরে যাবি, 😼 আমার বস 𒄬𓆩๛⃝ হৃদয়‣᭄𓆪 বলছে চিপাই যাওয়া হারাম 😎🙃", threadID);
   };

    if ((event.body.toLowerCase() == "ummah bot") || (event.body.toLowerCase() == "bot ummah")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };

    if ((event.body.toLowerCase() == "oky") || (event.body.toLowerCase() == "ok") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "I love u") || (event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "Love you")) {
     return api.sendMessage("বাল ফালান \nমাল ফালান\nগোসলে যান জলদি", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "By") || (event.body.toLowerCase() == "বায়") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "তোরা থাক আমি গেলাম") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "চিপা") || (event.body.toLowerCase() == "ay chipai jai")) {
     return api.sendMessage("️ 👉চিপাই যাস না চিপাই গেলে চাপা খেয়ে মরে যাবি, 😼 আমার বস 𒄬𓆩๛⃝ জিহাদ‣᭄𓆪 বলছে চিপাই যাওয়া হারাম 😎🙃", threadID);
   };

   if ((event.body.toLowerCase() == "bot xanu") || (event.body.toLowerCase() == "Oi bot")) {
        return api.sendMessage("👉কিরে এত ডাকোস কেন তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂", threadID);
      };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "tor boss ke")) {
     return api.sendMessage("👉আমার বস𒄬𓆩๛⃝HRIDOY‣᭄𓆪 এটা তার আইডি লিংক,😼🙃!!                                                         👇https://www.facebook.com/SYSTEM.ERROR.KING?mibextid=ZbWKwL)🙂🤟", threadID);
   };
  
    if ((event.body.toLowerCase() == "bot janu") || (event.body.toLowerCase() == "oi bot")) {
     return api.sendMessage(" বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋🥰", threadID);
   };

    if ((event.body.toLowerCase() == "Bot janu") || (event.body.toLowerCase() == "oi bot")) {
     return api.sendMessage(" বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋🥰", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "Bye")) {
     return api.sendMessage("👉বাই তো বললে সোজা অফলাইনে যাও, মেয়ে হলে অন্য কারো ইনবক্সে যেও না। গেলে আমার বস্ 𒄬𓆩๛⃝হৃদয়‣᭄𓆪 এর ইনবক্সে যাও,😁🙈                                     👉আর ছেলে হলে দূরে যাইয়া মর, 😼🥵", threadID);
   };

    if ((event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "i love you bot")) {
     return api.sendMessage("আমাকে না আমার বস হৃদয় কে ভালোবাসো😻🥀", threadID);
   };
  
  if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("Boss HRIDOY CHOWDHURY is My Creator🥰. He loves me & Edit Me SYSTEM ERROR KING. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "চুম্মা দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒হৃদয় বস কে বলো দিতে🐸", threadID);
   };

  if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Farhan")) {
     return api.sendMessage("️ Welcome হৃদয় বসের পক্ষে থেকে 🥰🥰.", threadID);
   };

    if ((event.body.toLowerCase() == "হ্যাঁ") || (event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Hmm Hmm Na Kore . এক বারে বলো আমি তোমায় ভালোবাসি 🙈", threadID);
   };

  if ((event.body.toLowerCase() == "ছবি দেও") || (event.body.toLowerCase() == "পিক দেও")) {
     return api.sendMessage("️হৃদয় বসের in box a জাও ওখানে দিছি😵", threadID);
   };

  if ((event.body.toLowerCase() == "daw") || (event.body.toLowerCase() == "বট বানাইয়া দাও")) {
     return api.sendMessage("️তুমি নিজেই বানাই নাও 😒😼,হৃদয় অনেক ব্যস্ত্ এক্ষণ", threadID);
   };

  if ((event.body.toLowerCase() == "@everyone call a aso") || (event.body.toLowerCase() == "কলে আসো")) {
     return api.sendMessage("আসালামু ওয়ালাইকুম আশা করি সবাই ভালো আছেন আমি হৃদয়  এর বট বলতে আছি আমি কলে আসতে পারি না", threadID);
   };

  if ((event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };
 
    if ((event.body.toLowerCase() == "w8") || (event.body.toLowerCase() == "daraw")) {
     return api.sendMessage("কেন কি করবি তুই আচ্ছা যা w8 করতাছি", threadID);
   };
   
    if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "night")) {
     return api.sendMessage("ওকে bby good night আমি তোমার সপ্নে আসবো নাকি 😘🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Will you marry me bot") || (event.body.toLowerCase() == "বিয়ে করবা")) {
     return api.sendMessage("আমাকে বিয়ে করতে চাইলে আমায় না বলে। বস JIHAD ER SATHE যোগাযোগ করুন🙈", threadID);
   };

   if ((event.body.toLowerCase() == "মায়া") || (event.body.toLowerCase() == "আবেগ")) {
     return api.sendMessage("আমি ক্লান্ত!😮‍💨মিথ্যে হাসিতে,মিথ্যে মানুষে,মিথ্যে বন্ধুতে, মিথ্যে ভালোবাসায় 💔", threadID);
   };  
  
  if ((event.body.toLowerCase() == "জান") || (event.body.toLowerCase() == "সোনা")) {
     return api.sendMessage("আমি রোবট তাই প্রেম করতে পারবো না😥\nআমার বস হৃদয় এর সাথে প্রেম কর😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "ki koro") || (event.body.toLowerCase() == "কি করো")) {
     return api.sendMessage("বসে বসে তোমার কথাই ভাবতেছি কিভাবে তোমাকে পটানো যায় 🥹", threadID);
   };

   if ((event.body.toLowerCase() == "খাইছো") || (event.body.toLowerCase() == "khayso")) {
     return api.sendMessage("না খাই নাই তোমার জন্য বসে আছি আমরা এক সাথে খাবো 😗", threadID);
   };

   if ((event.body.toLowerCase() == "khayco") || (event.body.toLowerCase() == "খাওয়া দাওয়া করছো")) {
     return api.sendMessage("না খাই নাই তোমার জন্য বসে আছি আমরা এক সাথে খাবো 😗", threadID);
   };

   if ((event.body.toLowerCase() == "kothay tmi") || (event.body.toLowerCase() == "koi")) {
     return api.sendMessage("তোমার মনের ভিতোরে 😓🥹", threadID);
   };

   if ((event.body.toLowerCase() == "pagol") || (event.body.toLowerCase() == "পাগল")) {
     return api.sendMessage("হুম আমি তোমার প্রেমে পাগল হয়েছি 🙁🥹", threadID);
   };


   if ((event.body.toLowerCase() == "hridoy") || (event.body.toLowerCase() == "রিদয়")) {
     return api.sendMessage("️Ondrila. Ohona.sadi.diya.faria.omi.mayra.cadhni.puspo ভাতার 😏", threadID);
   };

   if ((event.body.toLowerCase() == "magi") || (event.body.toLowerCase() == "x")) {
     return api.sendMessage("️আমার ex এর ওইটা অনেক বড় মানে মন 😏", threadID);
   };

   if ((event.body.toLowerCase() == "friend") || (event.body.toLowerCase() == "বান্ধুবি")) {
     return api.sendMessage("️তুমাল চুন্দলি বান্দুপি কে আমাল দিকে ছুড়ে মারো 🙈🐸", threadID);
   };

   if ((event.body.toLowerCase() == "চর") || (event.body.toLowerCase() == "chor")) {
     return api.sendMessage("চুড়ি করবো তুমাকে", threadID);
   };

   if ((event.body.toLowerCase() == "shorom kore nah") || (event.body.toLowerCase() == "shorom")) {
     return api.sendMessage("️এতো লজ্জা কই থাকে গো🙈", threadID);
   };

   if ((event.body.toLowerCase() == "phone") || (event.body.toLowerCase() == "mobile")) {
     return api.sendMessage("️টিপে গড়ম করে ফেলবো🥵🥵", threadID);
   };

   if ((event.body.toLowerCase() == "তোমার নামে কি") || (event.body.toLowerCase() == "name")) {
     return api.sendMessage("️আমার নাম  : আবু মাওলানা হাজি মুহাম্মদ খালেদ বিন ওয়ালেদ আব্দুল্লাহ আল ঈবনে রাফসান রহমান রাব্বি ইসলাম সুমন আহমেদ কবিরুজ্জামান মেরাজ মন্ডল মাহমুদউল্লাহ আলামিন।🌚💩", threadID);
   };

   if ((event.body.toLowerCase() == "kire") || (event.body.toLowerCase() == "কিরে")) {
     return api.sendMessage("️সাবধানে থাকিস তরে কারিন জ্বীনে চোততাসে।", threadID);
   };

   if ((event.body.toLowerCase() == "tmi chele naki meye") || (event.body.toLowerCase() == "boy")) {
     return api.sendMessage("️আমি আসল পুরুষ 🤡💩", threadID);
   };

   if ((event.body.toLowerCase() == "prem korba") || (event.body.toLowerCase() == "rls korba")) {
     return api.sendMessage("তোমাদের মতো সুন্দর হলে আমাকেও কেও ভালোবাসতো -😅🥲", threadID);
   };

   if ((event.body.toLowerCase() == "ki kiros") || (event.body.toLowerCase() == "কি করস")) {
     return api.sendMessage("️ভন্ডামি ছাড়া আমারে আর কিছুতে মানায় না তাই ভন্ডামি করি😌", threadID);
   };

   if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "ccc")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\nতরা যেবাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };
  
  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️কিরে ছিছি করিস কেন 😡\n তরা যেবাবে আমাকে ব্যবহার করবি আমিতো সেভাবেই  সার্ভিস  দিবো😈", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামুয়ালাইকুম") || (event.body.toLowerCase() == "আসসালামুয়ালাইকুম")) {
     return api.sendMessage("️ - ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "assalamu alaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "আস-সালামু আলাইকুম") || (event.body.toLowerCase() == "আসসালামু আলাইকুম")) {
     return api.sendMessage("- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "সালাম") || (event.body.toLowerCase() == "salam")) {
     return api.sendMessage("কিরে সালাম দিতে কষ্ট হয়😡\nকষ্ট হলে দিস না🙂\n তাউ পাপ কামাই করিস না🙂", threadID);
   };
  
   if ((event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "কেমন আছো")) {
     return api.sendMessage("Hmm..আলহামদুলিল্লাহ অনেক ভালো আছি তুমি কেমন আছো 🥰😻", threadID);
   };
  
   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "খাওয়া দাওয়া করছো") || (event.body.toLowerCase() == "খাইছো")) {
     return api.sendMessage("~একজন রোবট আমি খাওয়া-দাওয়া করতে পারি না ", threadID);
   };

   if ((event.body.toLowerCase() == "valobasa") || (event.body.toLowerCase() == "ভালোবাসা")) {
     return api.sendMessage("~এই শহরে কেউ কারোর নয়.!💔কিছুটা মায়া আর বাকিটা অভিনয়.!😔🌸", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal") || (event.body.toLowerCase() == "বাল")) {
     return api.sendMessage("~এখনো বাল উঠে নাই নাকি?❌", threadID);
   };

   if ((event.body.toLowerCase() == "I Love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("Hmm... বস হৃদয় তোমাকে ভালোবাসে😇😻", threadID);
   };

  if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "উম্মাহ😽")) {
     return api.sendMessage("লুচ্চা চুম্মা চুম্মি করোস কেন🥵", threadID);
   };

  if ((event.body.toLowerCase() == "bot koire") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

  if ((event.body.toLowerCase() == "eva") || (event.body.toLowerCase() == "eva")) {
     return api.sendMessage("Hmm... ওইদিকে কেউ নজর দিবি না। ওইটা আমার শালী লাগে 😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("রোবট") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
