#class Node:
#    def __init__(self, data):
#        self.data = data
#        self.next = None

class Solution:
    def isCircular(self, head):
        if head is None:
            return False
        curr = head.next
        while curr is not None and curr != head:
            curr = curr.next
        
        return curr==head