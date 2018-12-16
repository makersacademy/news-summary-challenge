
curl "https://api.aylien.com/api/v1/summarize"
   -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
   -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID"
   -d sentences_number=3
   -d url="http://techcrunch.com/2015/04/06/john-oliver-just-changed-the-surveillance-reform-debate"
