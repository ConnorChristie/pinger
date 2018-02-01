pipeline {
  agent {
    docker {
      image 'centos'
    }
    
  }
  stages {
    stage('Deploy') {
      agent {
        node {
          label 'deployer'
        }
        
      }
      steps {
        echo 'Hello world'
      }
    }
  }
}