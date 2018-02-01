pipeline {
  agent {
    docker {
      image 'centos:latest'
    }
    
  }
  stages {
    stage('Deploy') {
      agent {
        docker {
          image 'centos:latest'
        }
        
      }
      steps {
        echo 'Hello world'
      }
    }
  }
}