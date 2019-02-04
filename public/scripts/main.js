window.onload = () => {
    // const Guardian_fields = ['page=1', 'from-date=2019-01-27', 'show-fields=bodyText', 'show-fields=thumbnail']
    // const Guardian_Api = new News_source('Guardian','https://content.guardianapis.com/search?', 'api-key=b7613454-c424-4c87-a7e2-ae508f029ebf', Guardian_fields);

    //guardian v2
    const Guardian_fields_2 = ['sources=the-guardian-uk']
    const Guardian_Api_2 =  new News_source('Daily_mail','https://newsapi.org/v2/top-headlines?', 'apiKey=e346d73f7c62480fbdba9e6225f19a92', Guardian_fields_2);


    const Daily_mail_fields = ['sources=daily-mail']
    const Daily_mail_api = new News_source('Daily_mail','https://newsapi.org/v2/top-headlines?', 'apiKey=e346d73f7c62480fbdba9e6225f19a92', Daily_mail_fields);  


    // const Guardian_request = fetch_request(Guardian_Api.api_request, guardian_display_handler, 'guardian-container');
     const Guardian_request = fetch_request(Guardian_Api_2.api_request, daily_mail_display_handler, 'guardian-container');
     const Daily_mail_request = fetch_request(Daily_mail_api.api_request, daily_mail_display_handler, 'daily-mail-container');
 
   //Guardian listeners 
   //https://davidwalsh.name/event-delegate
}