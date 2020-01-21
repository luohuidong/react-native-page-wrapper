const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar');

function log(text) {
  console.log(text)
}

const watcher = chokidar.watch('./example/components/PageWrapper/')

function getDistPath(originalPath) {
  console.log("TCL: getDistPath -> originalPath", originalPath)
  const regexp = /^example\/components\/PageWrapper\//
  originalPath = originalPath.replace(regexp, '')

  const distFilePath = path.join(__dirname, './src/', originalPath)
  console.log("TCL: getDistPath -> distFilePath", distFilePath)
  return distFilePath
}

function handleAddOrSaveFile(originalFilePath) {
  const distFilePath = getDistPath(originalFilePath)
  const isExist = fs.existsSync(distFilePath)

  if (isExist) {
    const content = fs.readFileSync(originalFilePath, { encoding: 'utf8' })
    fs.writeFileSync(distFilePath, content)
    log(`File ${originalFilePath} has been changed`)
  } else {
    fs.copyFileSync(originalFilePath, distFilePath)
    log(`File ${originalFilePath} has been added`)
  }
}
watcher.on('add', handleAddOrSaveFile)
watcher.on('change', handleAddOrSaveFile)

function handleAddDir(originalDirPath) {
  log(`Directory ${originalDirPath} has been added`)
  const distDirPath = getDistPath(originalDirPath)
  const isExist = fs.existsSync(distDirPath)

  if (!isExist) {
    fs.mkdirSync(distDirPath)
  }
}
watcher.on('addDir', handleAddDir)

function handleUnlinkFile(filePath) {
  const distFilePath = getDistPath(filePath)
  const isExist = fs.existsSync(distFilePath)

  if (isExist) {
    fs.unlinkSync(distFilePath)
    log(`File ${filePath} has been removed`)
  }
}
watcher.on('unlink', handleUnlinkFile);

function handleUnlinkDir(originalDirPath) {
  const distDirPath = getDistPath(originalDirPath)
  const isExist = fs.existsSync(distDirPath)
  if (isExist) {
    fs.rmdirSync(distDirPath)
    log(`Directory ${originalDirPath} has been removed`)
  }
}
watcher.on('unlinkDir', handleUnlinkDir)
