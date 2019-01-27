window.onload = () => {

    const Guardian_Api = new News_source('Guardian','https://content.guardianapis.com/search', 'b7613454-c424-4c87-a7e2-ae508f029ebf');
    var Guardian_request = fetch_request(Guardian_Api, display_handler);
    Guardian_request.fetch_headlines();
    


}