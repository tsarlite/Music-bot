module.exports = {
    app: {
        token: 'OTAzODUxMDkzNzkwOTU3NTk4.YXy-7Q.exnK6n-ogD_UHncAK5axLt5jzYc',
        playing: 'shit music 💩',
        global: true,
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
