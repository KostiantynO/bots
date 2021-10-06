// telegram-bot-01
bot.on('mesage', msg => {
  const chatId = msg.chat.id;
  bot.sendPhoto(chatId, 'keks.png');
});

// Keyboard
const keyboard = [
  [
    {
      text: 'I want a cat picture', // text on the button
      callback_data: 'moreKeks', // data for event processor
    },
  ],
  [
    {
      text: 'I want a god picture',
      callback_data: 'moreDog',
    },
  ],
  [
    {
      text: 'I want to complete the GoIT courses',
      url: 'https://app.schoology.com/course/5159849489/materials',
    },
  ],
];

// Обработчик нажатий на клавиатуру (key-pressed processor)
bot.on('callback_query', query => {
  const chatId = query.message.chat.id;

  let img = '';
  query.data === 'moreKeks' && (img = 'keks.png'); // if cat
  query.data === 'moreDog' && (img = 'dog.png'); // if dog

  if (img) {
    bot.sendPhoto(chatId, img, {
      // adds keyboard
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  } else {
    bot.sendMessage(chatId, 'Непонятно, давай попробуем еще раз?', {
      // adds keyboard
      reply_markup: {
        inline_keyboard: keyboard,
      },
    });
  }
});
