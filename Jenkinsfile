pipeline {
  environment {
    imagename = "billonprestations/calculafrette"
    registryCredential = '7cb4757b-d513-44ac-a2e2-769cfb76d4da'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'git@github.com:billonalex/CalculaFrette.git', branch: 'master', credentialsId: '70168452-fb78-4765-9532-6c26bc630ce1'])
 
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build(imagename, ". -f ./front/docker/Dockerfile.prod")
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$VERSION")
             dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $imagename:$VERSION"
         sh "docker rmi $imagename:latest"
 
      }
    }
    stage('Tag release') {
      steps {
        script {
          sh("git config user.email billonalex21@gmail.com")
          sh("git config user.name 'billonalex'")
          sh("git tag -a $VERSION -m 'Release $VERSION'")
          sh('git push --tags')
        }
      }
    }
  }
}