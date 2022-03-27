const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Dumb, why did you post.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Omg I love this!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Call 888-888-888 for a good time...',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Super helpful.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Ehhh, I would do this a different way.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Love this site!',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'I cannot belive this.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Lmaaaaaaaaaoooooo.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: '笑死了哈哈哈哈',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: '请给我一个赞！',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Whoa, never thought of it this way!',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'I hate Java...',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Thank the heavens for Node.js!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Does this consider different screen sizes?',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: `You're still using var...?`,
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'I have no idea what this all means.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Life is meaningless. That could be a good thing or a bad thing.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Finally, a solution!',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Never thought we would ge this far.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'RIP Taylor Hawkins.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'RIP.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'May her memory be a blessing.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Have you ever thought of just like, not posting?.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      `I'm reporting this to the mods!!!`,
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'No way...',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Yeah way...',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Wow the comments here are crazy.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'PRUDES!',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'PRUNES!',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'DUNE!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'DOOM!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Sakura Haruno is the strongest kunoichi ever!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Sasuke sux hahah xxxxx',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Dolor.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'This gives me severe pain.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: `Can't believe Achilles really dragged Hector around like that.`,
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Talk about man problems.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Hot girls only!',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Finally, a safe space for beautiful women who also happen to be geniuses.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Nice!',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'hahahahahaaaa',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      `I cannot believe what I'm reading...`,
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Oh you better believe it!',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Believe it!',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      `He's gonna be king of the pirates...`,
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Going out to the grand line...',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Team Nami all the way!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Delightful!',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'purrrrfect.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Cool site!',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
