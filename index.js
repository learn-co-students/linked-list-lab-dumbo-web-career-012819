function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection){
  let targetNode = collection[linkedList]

  for(let i = 0; i < index; i++){
    targetNode = next(targetNode, collection)
  }

  return targetNode
}

function addressAt(index, linkedList, collection){
  let address = linkedList

  for(let i = 0; i < index; i++){
    address = collection[address].next
  }

  return address
}

function indexAt(node, collection, linkedList){
  let index = 0

  while(nodeAt(index, linkedList, collection) !== node){
    index++
  }

  return index
}

function insertNodeAt(index, address, linkedList, collection){
  // link node before index to new node
  // link new node to old node
  const prevNode = nodeAt(index - 1, linkedList, collection)
  collection[address].next = prevNode.next
  prevNode.next = address

}

function deleteNodeAt(index, linkedList, collection){
  // remove reference to next from deleted node
  // remove reference to deleted node

  const prevNode = nodeAt(index - 1, linkedList, collection)
  const oldNode = collection[prevNode.next]
  prevNode.next = oldNode.next
  oldNode.next = ''
}
