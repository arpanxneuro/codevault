class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Solution:
    def sortedInsert(self, head, data):
        new_node = Node(data)

        if head is None:
            new_node.next = new_node
            return new_node

        current = head

        if data < head.data:
            while current.next != head:
                current = current.next
            current.next = new_node
            new_node.next = head
            head = new_node
            return head

        while (current.next != head and current.next.data < data):
            current = current.next

        new_node.next = current.next
        current.next = new_node

        return head
