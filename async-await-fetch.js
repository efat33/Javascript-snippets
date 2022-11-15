
async function getHolidays() {
    const holidayAPIKey = '280bd1b9-85ef-46cf-8fa7-2d76110b7901';
    const year = moment().year();
    const col_country_from = jQuery('#col_country_from').val();

    try {
        const res = await fetch(
            `https://holidayapi.com/v1/holidays?public=true&country=${col_country_from}&year=${year}&key=${holidayAPIKey}`
        );
        const resData = await res.json();
        if (resData.status && resData.status == 200) {
            const holidays = resData.holidays.map((item) => item.date);
            return holidays;
        }
    } catch (error) {
        console.log(error);
    }
}

async function initiateOrUpdateCalendar() {

    const holidays = await getHolidays();
}

initiateOrUpdateCalendar();
