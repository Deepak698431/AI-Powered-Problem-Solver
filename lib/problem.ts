export const problems =[
  {
    "id": 1,
    "difficulty": "Easy",
    "problem_statement": "Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "input": "nums = [2,7,11,15], target = 9",
    "output": "[0,1]",
    "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]. [cite: 18, 19, 21, 22]"
  },
  {
    "id": 2,
    "difficulty": "Medium",
    "problem_statement": "You are given an array of prices where prices[i] is the price of a given stock on an ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    "input": "prices = [7,1,5,3,6,4]",
    "output": "5",
    "explanation": "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1=5. [cite: 25, 26, 29, 31]"
  },
  {
    "id": 3,
    "difficulty": "Easy",
    "problem_statement": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "input": "nums = [1,2,3,1]",
    "output": "true",
    "explanation": "The array contains duplicate values. [cite: 36, 37]"
  },
  {
    "id": 4,
    "difficulty": "Hard",
    "problem_statement": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[I]. You must write an algorithm that runs in O(n) time and without using the division operation.",
    "input": "nums = [1,2,3,4]",
    "output": "[24,12,8,6]",
    "explanation": "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. [cite: 40, 41, 42, 43]"
  },
  {
    "id": 5,
    "difficulty": "Medium",
    "problem_statement": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "output": "6",
    "explanation": "The subarray [4,-1,2,1] has the largest sum 6. [cite: 48, 49, 51]"
  },
  {
    "id": 6,
    "difficulty": "Medium",
    "problem_statement": "Given an integer array nums, find a subarray that has the largest product, and return the product.",
    "input": "nums = [2,3,-2,4]",
    "output": "6",
    "explanation": "[2,3] has the largest product 6. [cite: 57, 58, 60]"
  },
  {
    "id": 7,
    "difficulty": "Hard",
    "problem_statement": "Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
    "input": "nums = [3,4,5,1,2]",
    "output": "1",
    "explanation": "The original array was [1,2,3,4,5] rotated 3 times. [cite: 69, 70, 71, 73]"
  },
  {
    "id": 8,
    "difficulty": "Medium",
    "problem_statement": "Given the array nums after the possible rotation and an integer target, return the index of the target if it is in nums, or -1 if it is not in nums.",
    "input": "nums = [4,5,6,7,0,1,2], target = 0",
    "output": "4",
    "explanation": "The target 0 is located at index 4. [cite: 76, 78]"
  },
  {
    "id": 9,
    "difficulty": "Medium",
    "problem_statement": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i!=j, i!=k and j !=k and nums[i] + nums[j] + nums[k] == 0.",
    "input": "nums = [-1,0,1,2,-1,-4]",
    "output": "[[-1,-1,2],[-1,0,1]]",
    "explanation": "The distinct triplets are [-1,0,1] and [-1,-1,2]. [cite: 84, 86, 88, 91]"
  },
  {
    "id": 10,
    "difficulty": "Medium",
    "problem_statement": "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    "input": "height = [1,8,6,2,5,4,8,3,7]",
    "output": "49",
    "explanation": "The max area of water the container can contain is 49. [cite: 96, 98, 100]"
  },
  {
    "id": 11,
    "difficulty": "Easy",
    "problem_statement": "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
    "input": "matrix=[[1,1,1],[1,0,1],[1,1,1]]",
    "output": "[[1,0,1],[0,0,0],[1,0,1]]",
    "explanation": "Zeroes are populated across the respective row and column. [cite: 122, 123, 124]"
  },
  {
    "id": 12,
    "difficulty": "Medium",
    "problem_statement": "Given an m x n matrix, return all elements of the matrix in spiral order.",
    "input": "matrix=[[1,2,3],[4,5,6],[7,8,9]]",
    "output": "[1,2,3,6,9,8,7,4,5]",
    "explanation": "The elements are returned following a clockwise spiral pattern. [cite: 129, 130]"
  },
  {
    "id": 13,
    "difficulty": "Medium",
    "problem_statement": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in place.",
    "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output": "[[7,4,1], [8,5,2], [9,6,3]]",
    "explanation": "DO NOT allocate another 2D matrix and do the rotation. [cite: 141, 142, 143, 144]"
  },
  {
    "id": 14,
    "difficulty": "Hard",
    "problem_statement": "Given an m x n grid of characters board and a string word, return true if the word exists in the grid.",
    "input": "board = [['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E']], word = 'ABCCED'",
    "output": "true",
    "explanation": "The word can be constructed from sequentially adjacent cells. [cite: 149, 150, 152, 154]"
  },
  {
    "id": 15,
    "difficulty": "Medium",
    "problem_statement": "Given a string s, find the length of the longest substring without repeating characters.",
    "input": "s = 'abcabcbb'",
    "output": "3",
    "explanation": "The answer is 'abc', with a length of 3. [cite: 160, 161, 163]"
  },
  {
    "id": 16,
    "difficulty": "Medium",
    "problem_statement": "You are given a string s and an integer k. Return the length of the longest substring containing the same letter you can get after performing the above operations.",
    "input": "s = 'ABAB', k=2",
    "output": "4",
    "explanation": "Replace the two 'A's with two 'B's or vice versa. [cite: 166, 169, 170, 172]"
  },
  {
    "id": 17,
    "difficulty": "Hard",
    "problem_statement": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
    "input": "s = 'ADOBECODEBANC', t = 'ABC'",
    "output": "'BANC'",
    "explanation": "The minimum window substring 'BANC' includes 'A', 'B', and 'C' from string t. [cite: 177, 179]"
  },
  {
    "id": 18,
    "difficulty": "Easy",
    "problem_statement": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    "input": "s = 'anagram', t = 'nagaram'",
    "output": "true",
    "explanation": "An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase. [cite: 175, 176, 177]"
  },
  {
    "id": 19,
    "difficulty": "Medium",
    "problem_statement": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "input": "strs = ['eat','tea','tan','ate','nat','bat']",
    "output": "[['bat'],['nat','tan'],['ate','eat','tea']]",
    "explanation": "Words made of the exact same letters are grouped together. [cite: 184, 185, 186]"
  },
  {
    "id": 20,
    "difficulty": "Easy",
    "problem_statement": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "input": "s = '()[]{}'",
    "output": "true",
    "explanation": "Open brackets must be closed by the same type of brackets in the correct order. [cite: 181, 183, 184]"
  },
  {
    "id": 21,
    "difficulty": "Medium",
    "problem_statement": "Given a string s, return the longest palindromic substring in s.",
    "input": "s = 'babad'",
    "output": "'bab'",
    "explanation": "'aba' is also a valid answer. [cite: 192, 193]"
  },
  {
    "id": 22,
    "difficulty": "Medium",
    "problem_statement": "Given a string s, return the number of palindromic substrings in it.",
    "input": "s = 'abc'",
    "output": "3",
    "explanation": "Three palindromic strings: 'a','b','c'. [cite: 187, 190]"
  },
  {
    "id": 23,
    "difficulty": "Medium",
    "problem_statement": "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and decoded back to the original list of strings.",
    "input": "['lint','code','love','you']",
    "output": "['lint','code','love','you']",
    "explanation": "One possible encode method is: 'lint:;code:;love:;you'. [cite: 195, 196, 197]"
  },
  {
    "id": 24,
    "difficulty": "Easy",
    "problem_statement": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "input": "head = [1,2,3,4,5]",
    "output": "[5,4,3,2,1]",
    "explanation": "The pointers of the linked list are reversed. [cite: 206, 207]"
  },
  {
    "id": 25,
    "difficulty": "Easy",
    "problem_statement": "Given the head, the head of a linked list, determine if the linked list has a cycle in it.",
    "input": "head = [3,2,0,-4], pos = 1",
    "output": "true",
    "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed). [cite: 201, 205]"
  },
  {
    "id": 26,
    "difficulty": "Easy",
    "problem_statement": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one-sorted list.",
    "input": "list1 = [1,2,4], list2 = [1,3,4]",
    "output": "[1,1,2,3,4,4]",
    "explanation": "The list should be made by splicing together the nodes of the first two lists. [cite: 210, 211]"
  },
  {
    "id": 27,
    "difficulty": "Hard",
    "problem_statement": "You are given an array of k linked-lists lists, each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list and return it.",
    "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
    "output": "[1,1,2,3,4,4,5,6]",
    "explanation": "merging them into one sorted list: 1->1->2->3->4->4->5->6. [cite: 208, 209, 210]"
  },
  {
    "id": 28,
    "difficulty": "Medium",
    "problem_statement": "You are given the head of a singly linked list. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
    "input": "head = [1,2,3,4]",
    "output": "[1,4,2,3]",
    "explanation": "Only nodes themselves may be changed, not the values. [cite: 213, 214, 215]"
  },
  {
    "id": 29,
    "difficulty": "Medium",
    "problem_statement": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    "input": "head = [1,2,3,4,5], n = 2",
    "output": "[1,2,3,5]",
    "explanation": "The 2nd node from the end (4) is removed. [cite: 215, 216]"
  },
  {
    "id": 30,
    "difficulty": "Easy",
    "problem_statement": "Given the root of a binary tree, return its maximum depth.",
    "input": "root = [3,9,20,null,null,15,7]",
    "output": "3",
    "explanation": "A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. [cite: 219, 220, 221]"
  },
  {
    "id": 31,
    "difficulty": "Easy",
    "problem_statement": "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
    "input": "p = [1,2,3], q = [1,2,3]",
    "output": "true",
    "explanation": "Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. [cite: 217, 218, 219]"
  },
  {
    "id": 32,
    "difficulty": "Easy",
    "problem_statement": "Given the root of a binary tree, invert the tree, and return its root.",
    "input": "root = [4,2,7,1,3,6,9]",
    "output": "[4,7,2,9,6,3,1]",
    "explanation": "Left and right children of all nodes are swapped. [cite: 227, 228]"
  },
  {
    "id": 33,
    "difficulty": "Hard",
    "problem_statement": "Given the root of a binary tree, return the maximum path sum of any non-empty path.",
    "input": "root = [1,2,3]",
    "output": "6",
    "explanation": "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6. [cite: 226, 227]"
  },
  {
    "id": 34,
    "difficulty": "Medium",
    "problem_statement": "Given the root of a binary tree, return the level order traversal of its nodes' values.",
    "input": "root = [3,9,20,null,null,15,7]",
    "output": "[[3],[9,20],[15,7]]",
    "explanation": "Traversed from left to right, level by level. [cite: 233, 234]"
  },
  {
    "id": 35,
    "difficulty": "Hard",
    "problem_statement": "Design an algorithm to serialize and deserialize a binary tree.",
    "input": "root = [1,2,3,null,null,4,5]",
    "output": "[1,2,3,null,null,4,5]",
    "explanation": "Ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure. [cite: 230, 232, 233]"
  },
  {
    "id": 36,
    "difficulty": "Easy",
    "problem_statement": "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
    "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
    "output": "true",
    "explanation": "A subtree of a binary tree is a tree that consists of a node in a tree and all of this node's descendants. [cite: 236, 237, 239]"
  },
  {
    "id": 37,
    "difficulty": "Medium",
    "problem_statement": "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
    "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
    "output": "[3,9,20, null, null,15,7]",
    "explanation": "Tree is constructed from its preorder and inorder sequences. [cite: 235, 236]"
  },
  {
    "id": 38,
    "difficulty": "Medium",
    "problem_statement": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    "input": "Not explicitly provided in text.",
    "output": "Boolean (true/false)",
    "explanation": "The left subtree contains only nodes with keys less than the node's key, and the right subtree contains only greater keys. [cite: 241, 242, 244]"
  },
  {
    "id": 39,
    "difficulty": "Medium",
    "problem_statement": "Given the root of a binary search tree and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    "input": "root = [3,1,4,null,2], k = 1",
    "output": "1",
    "explanation": "Returns the 1st smallest element in the BST. [cite: 240, 241]"
  },
  {
    "id": 40,
    "difficulty": "Medium",
    "problem_statement": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
    "input": "root = [6,2,8,0,4,7,9, null, null,3,5], p = 2, q = 8",
    "output": "6",
    "explanation": "Finds the lowest node in the tree that has both p and q as descendants. [cite: 251, 252]"
  },
  {
    "id": 41,
    "difficulty": "Medium",
    "problem_statement": "Implement the Trie class with insert, search, and startsWith methods.",
    "input": "['Trie','insert','search','search','startsWith','insert','search'] [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']]",
    "output": "[null, null, true, false, true, null, true]",
    "explanation": "A trie or prefix tree is used to efficiently store and retrieve keys in a dataset of strings. [cite: 249, 251]"
  },
  {
    "id": 42,
    "difficulty": "Hard",
    "problem_statement": "Given an m x n board of characters and a list of strings words, return all words on the board.",
    "input": "board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'], ['i','f','l','v']], words = ['oath','pea','eat','rain']",
    "output": "['eat','oath']",
    "explanation": "Each word must be constructed from letters of sequentially adjacent cells. [cite: 253, 254, 256]"
  },
  {
    "id": 43,
    "difficulty": "Medium",
    "problem_statement": "Design a data structure that supports adding new words and finding if a string matches any previously added string. A word may contain dots '.' where dots can be matched with any letter.",
    "input": "['WordDictionary','addWord','addWord','addWord','search','search','search','search']",
    "output": "Boolean array matching search results",
    "explanation": "The WordDictionary class adds words and searches with dot wildcard support. [cite: 257, 258, 259, 260]"
  },
  {
    "id": 44,
    "difficulty": "Medium",
    "problem_statement": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "input": "nums = [1,1,1,2,2,3], k = 2",
    "output": "[1,2]",
    "explanation": "Returns the 2 elements that appear most frequently. [cite: 267, 268]"
  },
  {
    "id": 45,
    "difficulty": "Hard",
    "problem_statement": "Implement the MedianFinder class to add numbers from a data stream and find the median of all elements so far.",
    "input": "['MedianFinder','addNum','addNum','findMedian','addNum','findMedian'] [[], [1], [2], [], [3], []]",
    "output": "[null, null, null, 1.5, null, 2.0]",
    "explanation": "Calculates the median as new values stream in. [cite: 272, 273, 276]"
  },
  {
    "id": 46,
    "difficulty": "Medium",
    "problem_statement": "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.",
    "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
    "output": "[[2,4],[1,3],[2,4],[1,3]]",
    "explanation": "You must return the copy of the given node as a reference to the cloned graph. [cite: 279, 287, 288]"
  },
  {
    "id": 47,
    "difficulty": "Medium",
    "problem_statement": "Given an array of prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai, return true if you can finish all courses.",
    "input": "numCourses = 2, prerequisites = [[1,0]]",
    "output": "true",
    "explanation": "To take course 1 you should have finished course 0. So it is possible. [cite: 290, 291, 292, 293]"
  },
  {
    "id": 48,
    "difficulty": "Medium",
    "problem_statement": "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
    "input": "grid = [['1','1','1','1','0'], ['1','1','0','1','0'], ['1','1','0','0','0'], ['0','0','0','0','0']]",
    "output": "1",
    "explanation": "An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. [cite: 294, 295, 296]"
  },
  {
    "id": 49,
    "difficulty": "Medium",
    "problem_statement": "Return a 2D list of grid coordinates results where result[i] = [ri, ci] denotes that rainwater can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.",
    "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
    "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
    "explanation": "Water flows to neighbors with less than or equal height to reach the oceans. [cite: 301, 303, 304]"
  },
  {
    "id": 50,
    "difficulty": "Medium",
    "problem_statement": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Algorithm must run in O(n) time.",
    "input": "nums = [100,4,200,1,3,2]",
    "output": "4",
    "explanation": "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. [cite: 306, 307, 308, 309]"
  },
  {
    "id": 51,
    "difficulty": "Hard",
    "problem_statement": "Derive the order of letters in an alien language given a list of non-empty words from the dictionary, sorted lexicographically by the rules of this new language.",
    "input": "['wrt', 'wrf', 'er', 'ett', 'rftt']",
    "output": "'wertf'",
    "explanation": "Find the topological ordering of the characters. [cite: 310, 311]"
  },
  {
    "id": 52,
    "difficulty": "Medium",
    "problem_statement": "Given n nodes labeled from 0 to n-1 and a list of undirected edges, write a function to check whether these edges make up a valid tree.",
    "input": "n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]",
    "output": "true",
    "explanation": "The nodes are connected without cycles forming a valid tree. [cite: 312, 313]"
  },
  {
    "id": 53,
    "difficulty": "Medium",
    "problem_statement": "Given n nodes labeled from 0 to n - 1 and a list of undirected edges, write a function to find the number of connected components in an undirected graph.",
    "input": "n = 5 and edges = [[0, 1], [1, 2], [3, 4]]",
    "output": "2",
    "explanation": "Calculates the total distinct sub-graphs. [cite: 314, 315]"
  },
  {
    "id": 54,
    "difficulty": "Easy",
    "problem_statement": "It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "input": "n = 2",
    "output": "2",
    "explanation": "There are two ways to climb to the top. 1. 1 step + 1 step, 2. 2 steps. [cite: 320, 321, 322, 323]"
  },
  {
    "id": 55,
    "difficulty": "Medium",
    "problem_statement": "Return the fewest number of coins that you need to make up the given amount. If it cannot be made up, return -1.",
    "input": "coins = [1,2,5], amount = 11",
    "output": "3",
    "explanation": "11 = 5 + 5 + 1. [cite: 317, 318, 319]"
  },
  {
    "id": 56,
    "difficulty": "Medium",
    "problem_statement": "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    "input": "text1 = 'abcde', text2 = 'ace'",
    "output": "3",
    "explanation": "The longest common subsequence is 'ace' and its length is 3. [cite: 324, 325, 327]"
  },
  {
    "id": 57,
    "difficulty": "Medium",
    "problem_statement": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    "input": "nums = [10,9,2,5,3,7,101,18]",
    "output": "4",
    "explanation": "The longest increasing subsequence is [2,3,7,101], therefore the length is 4. [cite: 328]"
  },
  {
    "id": 58,
    "difficulty": "Medium",
    "problem_statement": "Given an array of distinct integer nums and a target integer target, return the number of possible combinations that add up to the target.",
    "input": "nums = [1,2,3], target = 4",
    "output": "7",
    "explanation": "Different sequences are counted as different combinations. [cite: 329, 330]"
  },
  {
    "id": 59,
    "difficulty": "Medium",
    "problem_statement": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    "input": "s = 'leetcode', wordDict = ['leet','code']",
    "output": "true",
    "explanation": "Return true because 'leetcode' can be segmented as 'leet code'. [cite: 331, 333]"
  },
  {
    "id": 60,
    "difficulty": "Medium",
    "problem_statement": "Given an integer array nums representing the amount of money in each house arranged in a circle, return the maximum amount of money you can rob tonight without alerting the police.",
    "input": "nums = [2,3,2]",
    "output": "3",
    "explanation": "The police are contacted if two adjacent houses were broken into. [cite: 336, 338, 339, 340]"
  },
  {
    "id": 61,
    "difficulty": "Medium",
    "problem_statement": "Given a string s containing only digits, return the number of ways to decode it based on the A->1 ... Z->26 mapping.",
    "input": "s = '12'",
    "output": "2",
    "explanation": "The digits can be grouped in multiple ways to represent different letters. [cite: 348, 349, 350]"
  },
  {
    "id": 62,
    "difficulty": "Medium",
    "problem_statement": "Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner moving only down or right.",
    "input": "m = 3, n = 2",
    "output": "3",
    "explanation": "Calculates distinct paths down an m x n grid. [cite: 346, 347, 348]"
  },
  {
    "id": 63,
    "difficulty": "Medium",
    "problem_statement": "You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index.",
    "input": "nums = [2,3,1,1,4]",
    "output": "true",
    "explanation": "Jump 1 step from index 0 to 1, then 3 steps to the last index. [cite: 352, 353, 354]"
  },
  {
    "id": 64,
    "difficulty": "Medium",
    "problem_statement": "Insert new intervals into intervals such that intervals are still sorted in ascending order by start i and intervals still do not have any overlapping intervals.",
    "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output": "[[1,5],[6,9]]",
    "explanation": "Merges overlapping sections when the new interval is inserted. [cite: 362, 363]"
  },
  {
    "id": 65,
    "difficulty": "Medium",
    "problem_statement": "Given an array of intervals, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output": "[[1,6],[8,10],[15,18]]",
    "explanation": "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]. [cite: 358, 359]"
  },
  {
    "id": 66,
    "difficulty": "Medium",
    "problem_statement": "Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
    "output": "1",
    "explanation": "[1,3] can be removed and the rest of the intervals are non-overlapping. [cite: 365, 366]"
  },
  {
    "id": 67,
    "difficulty": "Easy",
    "problem_statement": "Given an array of meeting time intervals, determine if a person could attend all meetings.",
    "input": "[[0,30],[5,10],[15,20]]",
    "output": "false",
    "explanation": "Identifies if there are any overlaps in the scheduled intervals. [cite: 364, 365]"
  },
  {
    "id": 68,
    "difficulty": "Medium",
    "problem_statement": "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
    "input": "[[0, 30],[5, 10],[15, 20]]",
    "output": "2",
    "explanation": "Calculates simultaneous room requirement based on overlaps. [cite: 368, 369]"
  },
  {
    "id": 69,
    "difficulty": "Medium",
    "problem_statement": "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    "input": "a = 1, b = 2",
    "output": "3",
    "explanation": "Uses bitwise operations to compute the sum. [cite: 373, 374]"
  },
  {
    "id": 70,
    "difficulty": "Easy",
    "problem_statement": "Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (Hamming weight).",
    "input": "n = 00000000000000000000000000001011",
    "output": "3",
    "explanation": "The input binary string has a total of three '1' bits. [cite: 371, 372]"
  },
  {
    "id": 71,
    "difficulty": "Easy",
    "problem_statement": "Given an integer n, return an array of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
    "input": "n = 2",
    "output": "[0,1,1]",
    "explanation": "Counts the active bits for each number up to n. [cite: 380, 381]"
  },
  {
    "id": 72,
    "difficulty": "Easy",
    "problem_statement": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "input": "nums = [3,0,1]",
    "output": "2",
    "explanation": "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is missing. [cite: 375, 376, 377]"
  },
  {
    "id": 73,
    "difficulty": "Easy",
    "problem_statement": "Reverse bits of a given 32-bit unsigned integer.",
    "input": "n = 00000010100101000001111010011100",
    "output": "964176192",
    "explanation": "The reversed binary representation translates to the unsigned integer 964176192. [cite: 387]"
  }
]