var live2d_path = '/live2d/model/ftq_xhjy/model.json';
var messages = {
    "console": "哈哈，你打开了控制台，是想要看看我的秘密吗？",
    "copy": "你都复制了些什么呀，转载要记得加上出处哦~",
    "greeting": {
        "morning": "今日的你瞧上去比昨日更加惹人怜爱。",
        "evening": "要睡了？晚安。不来个晚安吻吗？",
        "normal": "诗曰“一日不见，如三月兮”，我对你却是“片刻不见，如隔三秋”啊。"
    },
    "mouseover": [
        {
            "selector": ".post-title",
            "text": ["要看看 {text} 吗？"],
            "pjax": true
        },
        {
            "selector": "#navbar_search_input, #leftbar_search_input",
            "text": ["美人在找什么东西呢，需要帮忙吗？"],
            "pjax": false
        }
    ],
    "click": [
        {
            "selector": "#landlord #live2d",
            "text": [
                "想要触碰我的头发吗？喜欢就尽管摸罢，我不介意。",
                "是你主动来拉我的，为什么反倒是你先害羞了？",
                "你是在好奇，我是否也会因你的靠近而心跳加速吗？",
                "喜欢我身上的味道？要不要再靠近些……嗯？"
            ],
            "pjax": false
        }
    ]
};

function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function(word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}
String.prototype.renderTip = function(context) {
    return renderTip(this, context);
};

function showMessage(text, timeout) {
    if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1) - 1];
    $('.message').stop();
    $('.message').html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout) {
    $('.message').stop().css('opacity', 1);
    if (timeout === null) timeout = 5000;
    $('.message').delay(timeout).fadeTo(200, 0);
}

function showGreeting() {
    var text;
    var now = (new Date()).getHours();
    if (now >= 7 && now < 9) {
        text = messages.greeting.morning;
    } else if (now >= 21 && now < 23) {
        text = messages.greeting.evening;
    } else {
        text = messages.greeting.normal;
    }
    showMessage(text, 15000);
};

function showHitokoto() {
    $.getJSON('https://v1.hitokoto.cn/', function(result) {
        showMessage(result.hitokoto, 5000);
    });
}

function addEventHandlers(init) {
    if (init) {
        var re = /x/;
        console.log(re);
        re.toString = function() {
            showMessage(messages.console, 5000);
            return '';
        };
        $(document).on('copy', function() {
            showMessage(messages.copy, 5000);
        });
        $('#landlord').hover(function() {
            $('.hide-button').stop(true);
            $('.hide-button').fadeIn(200);
        }, function() {
            $('.hide-button').stop(true);
            $('.hide-button').fadeOut(200);
        });
        $('.hide-button').fadeOut(0).on('click', function() {
            $('#landlord').css('display', 'none');
        });
    }
    $.each(messages.mouseover, function(index, tip) {
        if (!init && !tip.pjax) return;
        $(tip.selector).mouseover(function() {
            var text = tip.text;
            if (Array.isArray(tip.text)) text = tip.text[Math.floor(Math.random() * tip.text.length + 1) - 1];
            text = text.renderTip({ text: $(this).text() });
            showMessage(text, 5000);
        });
    });
    $.each(messages.click, function(index, tip) {
        if (!init && !tip.pjax) return;
        $(tip.selector).click(function() {
            var text = tip.text;
            if (Array.isArray(tip.text)) text = tip.text[Math.floor(Math.random() * tip.text.length + 1) - 1];
            text = text.renderTip({ text: $(this).text() });
            showMessage(text, 5000);
        });
    });
}

function initLive2d() {
    addEventHandlers(true);
    loadlive2d('live2d', live2d_path);
    var fun = window.pjaxLoaded;
    window.pjaxLoaded = function() {
        if (typeof(fun) === 'function') fun();
        addEventHandlers(false);
    }
    showGreeting();
}
initLive2d();
