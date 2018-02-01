pipeline {
  agent any
  stages {
    stage('Upload to Github') {
      steps {
        sh '''echo "Compressing artifacts into one file"
zip -r artifacts.zip .

echo "Exporting token and enterprise api to enable github-release tool"
export GITHUB_TOKEN=9b7353edadefb04125f589f7f38a48b0e602990e

echo "Creating a new release in github"
github-release release --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${VERSION_NAME} --name "${VERSION_NAME}"

echo "Uploading the artifacts into github"
github-release upload --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${VERSION_NAME} --name "${PROJECT_NAME}-${VERSION_NAME}.zip" --file artifacts.zip'''
      }
    }
  }
}