# -*- coding: utf-8 -*-
def t260000_0():
    """State 0,1"""
    t260000_x1(flag1=6000, flag2=6001, actionbutton1=6100, actionbutton2=6101, flag3=260, flag4=0, action1=10010715)
    Quit()

def t260000_x0():
    """State 0,1"""
    assert t260000_x7(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t260000_x1(flag1=6000, flag2=6001, actionbutton1=6100, actionbutton2=6101, flag3=260, flag4=0, action1=10010715):
    """State 0"""
    while True:
        """State 2"""
        DebugEvent('地上子ワープ椅子_非マルチ中')
        call = t260000_x3(actionbutton1=actionbutton1, actionbutton2=actionbutton2, flag3=flag3, flag4=flag4,
                          action1=action1)
        if IsMultiplayerInProgress() == 1:
            """State 1"""
            DebugEvent('地上子ワープ椅子_マルチ中')
            call = t260000_x2(actionbutton1=actionbutton1, flag3=flag3, flag4=flag4, action1=action1)
            if not IsMultiplayerInProgress():
                continue
            elif not GetEventStatus(flag1) or GetEventStatus(flag2) == 1:
                pass
        elif not GetEventStatus(flag1) or GetEventStatus(flag2) == 1:
            pass
        """State 3"""
        DebugEvent('地上子ワープ椅子_アクセス不可')
        call = t260000_x5()
        assert GetEventStatus(flag1) == 1 and not GetEventStatus(flag2)
    """Unused"""
    """State 4"""
    return 0

def t260000_x2(actionbutton1=6100, flag3=260, flag4=0, action1=10010715):
    """State 0,3"""
    ForceCloseMenu()
    while True:
        """State 2"""
        if GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
            pass
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton1)):
            """State 4"""
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            """State 5"""
            call = t260000_x8(flag3=flag3, flag4=flag4, action1=action1)
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                continue
        """State 1"""
        assert not GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20)
    """Unused"""
    """State 6"""
    return 0

def t260000_x3(actionbutton1=6100, actionbutton2=6101, flag3=260, flag4=0, action1=10010715):
    """State 0"""
    while True:
        """State 2"""
        Label('L0')
        DebugEvent('稼動状態_非マルチ中')
        if not GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20):
            break
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton2)):
            """State 3"""
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            """State 6"""
            call = t260000_x4(flag3=flag3, flag4=flag4, action1=action1)
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                """State 5"""
                assert t260000_x0()
    while True:
        """State 1"""
        DebugEvent('非稼動状態_非マルチ中')
        if GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
            Goto('L0')
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton1)):
            """State 4"""
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            """State 7"""
            call = t260000_x8(flag3=flag3, flag4=flag4, action1=action1)
            if call.Done() and GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
                Goto('L0')
            elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
                """State 8"""
                assert t260000_x0()
    """Unused"""
    """State 9"""
    return 0

def t260000_x4(flag3=260, flag4=0, action1=10010715):
    """State 0,5"""
    if not GetEventStatus(flag3 * 10 + 70000000 + flag4 * 1):
        """State 1"""
        OpenGenericDialog(2, 10010713, 3, 4, 2)
        def WhilePaused():
            SetTalkTime(0.33)
        if GetGenericDialogButtonResult() == 1:
            """State 3"""
            DebugEvent('OK')
            """State 6"""
            assert t260000_x6(flag3=flag3, flag4=flag4, z5=0)
        elif not IsGenericDialogOpen():
            """State 2"""
            DebugEvent('CANCEL')
    else:
        """State 4"""
        OpenGenericDialog(7, action1, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 7"""
    return 0

def t260000_x5():
    """State 0,1"""
    DebugEvent('待機_アクセス不可')
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t260000_x6(flag3=260, flag4=0, z5=0):
    """State 0,1"""
    SetEventState(flag3 * 10000 + 70000100 + flag4 * 1, 1)
    """State 2"""
    return 0

def t260000_x7(z1=99999, z2=99999, z3=99999, z4=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z1, 0) == 1 or CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z4, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t260000_x8(flag3=260, flag4=0, action1=10010715):
    """State 0,2"""
    if not GetEventStatus(flag3 * 10 + 70000000 + flag4 * 1):
        """State 3"""
        SetEventState(flag3 * 10000 + 70000200 + flag4 * 1, 1)
        def WhilePaused():
            c1_73(1)
        """State 4"""
        if GetEventStatus(6715) == 1:
            pass
        else:
            """State 6"""
            DebugEvent('ダイアログ表示許可待ち')
            assert GetEventStatus(70000030) == 1
            """State 5"""
            OpenGenericDialog(1, 10011240, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
    else:
        """State 1"""
        OpenGenericDialog(7, action1, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 7"""
    return 0

