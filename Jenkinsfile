pipeline {
  agent {
    node {
      label 'deployer'
    }
    
  }
  stages {
    stage('Deploy') {
      agent {
        docker {
          image 'centos'
        }
        
      }
      steps {
        echo 'Hello world'
      }
    }
  }
}
