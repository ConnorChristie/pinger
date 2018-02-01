pipeline {
  agent any
  stages {
    stage('Upload to Github') {
      steps {
        archiveArtifacts(allowEmptyArchive: true, artifacts: '.')
        sh '''echo "${GITHUB_ORGANIZATION} ${GITHUB_REPO} ${VERSION_NAME}"

echo "Creating a new release in github"
github-release release --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${VERSION_NAME} --name "${VERSION_NAME}"

echo "Uploading the artifacts into github"
github-release upload --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${VERSION_NAME} --name "${PROJECT_NAME}-${VERSION_NAME}.zip" --file artifacts.zip'''
      }
    }
  }
  environment {
    GITHUB_ORGANIZATION = 'ConnorChristie'
    GITHUB_REPO = 'pinger'
    VERSION_NAME = '1.0'
    PROJECT_NAME = 'DAB'
    GITHUB_TOKEN = '20a14bb7ee8a2b739b19914d44acbbcf7003ca09'
  }
}