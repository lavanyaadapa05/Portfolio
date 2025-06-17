from collections import Counter

def smallest_window(S, P):
    if not S or not P:
        return "-1"

    dict_p = Counter(P)
    required = len(dict_p)

    # Left and right pointers
    l, r = 0, 0
    # Formed is the number of characters in the current window which match the required count
    formed = 0
    window_counts = {}

    # (window length, left, right)
    ans = float("inf"), None, None

    while r < len(S):
        character = S[r]
        window_counts[character] = window_counts.get(character, 0) + 1

        if character in dict_p and window_counts[character] == dict_p[character]:
            formed += 1

        # Try and contract the window till the point it's no longer valid
        while l <= r and formed == required:
            character = S[l]

            # Save the smallest window
            if r - l + 1 < ans[0]:
                ans = (r - l + 1, l, r)

            window_counts[character] -= 1
            if character in dict_p and window_counts[character] < dict_p[character]:
                formed -= 1

            l += 1    

        r += 1    

    return S[ans[1]: ans[2] + 1] if ans[0] != float("inf") else "-1"
S = input().strip()
P = input().strip()
print(smallest_window(S, P))