$(".daily>button>a").click(function()
{
    $(".daily>button>a").css("color","white");
    $(".weekly>button>a").css("color","hsl(247, 76%, 79%)");
    $(".monthly>button>a").css("color","hsl(247, 76%, 79%)");
})

$(".weekly>button>a").click(function()
{
    $(".daily>button>a").css("color","hsl(247, 76%, 79%)");
    $(".weekly>button>a").css("color","white");
    $(".monthly>button>a").css("color","hsl(247, 76%, 79%)");
})

$(".monthly>button>a").click(function()
{
    $(".daily>button>a").css("color","hsl(247, 76%, 79%)");
    $(".weekly>button>a").css("color","hsl(247, 76%, 79%)");
    $(".monthly>button>a").css("color","white");
})

document.addEventListener("DOMContentLoaded", function () {
    const dailyButton = document.querySelector('.daily button');
    const weeklyButton = document.querySelector('.weekly button');
    const monthlyButton = document.querySelector('.monthly button');

    const dailyInfo = document.querySelectorAll('.work-info .day');
    const weeklyInfo = document.querySelectorAll('.work-info .week');
    const monthlyInfo = document.querySelectorAll('.work-info .month');

    function hideAllSections() {
        dailyInfo.forEach(item => item.classList.add('hide'));
        weeklyInfo.forEach(item => item.classList.add('hide'));
        monthlyInfo.forEach(item => item.classList.add('hide'));
    }

    dailyButton.addEventListener('click', function () {
        hideAllSections();
        dailyInfo.forEach(item => item.classList.remove('hide'));
    });

    weeklyButton.addEventListener('click', function () {
        hideAllSections();
        weeklyInfo.forEach(item => item.classList.remove('hide'));
    });

    monthlyButton.addEventListener('click', function () {
        hideAllSections();
        monthlyInfo.forEach(item => item.classList.remove('hide'));
    });
});

$("button.mode").click(function() {
        if ($("html").hasClass("light")) {
            $("html").removeClass("light");
        } else {
            $("html").addClass("light");
        }
});

$("button.logout").click(function() {
    window.location.href = "index.html";
});