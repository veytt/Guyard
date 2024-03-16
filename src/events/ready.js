//bot başladığında hangi işlemlerin yapılacağını ayarlarsınız.
const { ActivityType, Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        let activities = [
            `Sunucu Korunuyor--Black.02`
            
        ];
        let i = 0;

        // Botun durumu ayarlanıyor ve her 10 saniyede bir değiştiriliyor
        setInterval(() => {
            client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Playing });
        }, 10000);
        
        // Botun hakkımda kısmına metin ekleniyor
        client.user.setPresence({
            status: 'idle',
            activity: {
                name: 'Black https://discord.gg/nhGrz2CTkz',
                type: ActivityType.Playing
            }
        });
    }
};
