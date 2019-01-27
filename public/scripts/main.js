window.onload = () => {

    const Guardian_Api = new News_source('Guardian','https://content.guardianapis.com/search', 'b7613454-c424-4c87-a7e2-ae508f029ebf');
    Guardian_Api.fetch_headlines();
    console.log(Guardian_Api.data);
    const Guardian_display = DisplayHandler(Guardian_Api.data, 'guardian-container');
    Guardian_display.convert_all_to_thumb();


}