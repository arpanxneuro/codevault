class Solution:    
    def pairWiseSwap(self, head):
        # If list is empty or has only one node, no swap needed
        if head is None or head.next is None:
            return head

        # New head will be the second node
        prev = head
        curr = head.next
        head = curr

        while True:
            next_node = curr.next
            curr.next = prev  # swap the pair

            # if next pair doesn't exist or has only one node
            if next_node is None or next_node.next is None:
                prev.next = next_node
                break

            # connect previous pair to next pair's second node
            prev.next = next_node.next

            # move pointers forward
            prev = next_node
            curr = prev.next

        return head
