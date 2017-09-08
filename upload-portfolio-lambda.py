import boto3
import io
import zipfile
import mimetypes

s3 = boto3.resource('s3')

# source and destination buckets
portfolio_bucket = s3.Bucket('portfolio.alexdurr.com')
build_bucket = s3.Bucket('portfoliobuild.alexdurr.com')

# for in memory unzipping
portfolio_zip = io.BytesIO()
build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

# access zip output from Code Build and extract to S3
with zipfile.ZipFile(portfolio_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        portfolio_bucket.upload_fileobj(obj, nm,
          ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
