window.onload = () => {
    function display_guardian_article(id){}

    const Guardian_fields = ['page=1', 'from-date=2019-01-27', 'show-fields=bodyText', 'show-fields=thumbnail']
    const Guardian_Api = new News_source('Guardian','https://content.guardianapis.com/search?', 'api-key=b7613454-c424-4c87-a7e2-ae508f029ebf', Guardian_fields);
    const Daily_mail_fields = ['/top-headlines']
    const Daily_mail = new News_source('Daily_mail','https://newsapi.org/v2', 'apiKey=e346d73f7c62480fbdba9e6225f19a92', Daily_mail_fields);  
    var Guardian_request = fetch_request(Guardian_Api, guardian_display_handler);
    Guardian_request.fetch_headlines();
    
   //Guardian listeners 
   //https://davidwalsh.name/event-delegate


}